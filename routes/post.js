const express = require('express');
const router = express.Router();

const models = require('../models');

// GET for add
router.get('/edit/:id', async (req, res, next) => {
  const userId = req.session.userId;
  const userLogin = req.session.userLogin;
  const id = req.params.id.trim().replace(/ +(?= )/g, '');

  if (!userId || !userLogin) {
    res.redirect('/');
  } else {
    try {
      const post = await models.Post.findById(id).populate('uploads');

      if (!post) {
        const err = new Error('Not Found');
        err.status = 404;
        next(err);
      }

      res.render('post/edit', {
        post,
        user: {
          id: userId,
          login: userLogin
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
});

// GET for add
router.get('/add', async (req, res) => {
  const userId = req.session.userId;
  const userLogin = req.session.userLogin;

  if (!userId || !userLogin) {
    res.redirect('/');
  } else {
    res.render('post/edit', {
      user: {
        id: userId,
        login: userLogin
      }
    });
  }
});

// POST is add
router.post('/add', async (req, res) => {
  const userId = req.session.userId;
  const userLogin = req.session.userLogin;

  if (!userId || !userLogin) {
    res.redirect('/');
  } else {
    const title = req.body.title.trim().replace(/ +(?= )/g, '');
    const body = req.body.body.trim();
    const isDraft = !!req.body.isDraft;
    const postId = req.body.postId;

    if (!title || !body) {
      const fields = [];
      if (!title) fields.push('title');
      if (!body) fields.push('body');

      res.json({
        ok: false,
        error: 'All fields must be filled in!',
        fields
      });
    } else if (title.length < 3 || title.length > 64) {
      res.json({
        ok: false,
        error: 'Title length must be between 3 an 64 symbols!',
        fields: ['title']
      });
    } else if (body.length < 3) {
      res.json({
        ok: false,
        error: 'Text length must be more than 3 symbols!',
        fields: ['body']
      });
    } else {
      try {
        if (postId) {
          const post = await models.Post.findOneAndUpdate(
            {
              _id: postId,
              owner: userId
            },
            {
              title,
              body,
              owner: userId,
              status: isDraft ? 'draft' : 'published'
            },
            { new: true }
          );

          console.log(post);

          if (!post) {
            res.json({
              ok: false,
              error: 'Not youre post!'
            });
          } else {
            res.json({
              ok: true,
              post
            });
          }
        } else {
          const post = await models.Post.create({
            title,
            body,
            owner: userId
          });

          res.json({
            ok: true,
            post
          });
        }

        ///
      } catch (error) {
        res.json({
          ok: false
        });
      }
    }
  }
});

module.exports = router;
