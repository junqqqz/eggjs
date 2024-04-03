/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const baseRouter = app.config.baseRouter;
  router.get('/api/question', controller.home.index);
  router.patch('/api/question/id=:id',controller.home.questionStar);
  router.delete('/api/question/id=:id',controller.home.questionDelete);
  router.post('/api/question/create',controller.home.questionCreate);
  
  router.post('/api/user/login',controller.admin.adminLogin)
  router.get('/admin/list',controller.admin.adminlist)
  router.delete('/admin/remove/:id',controller.admin.adminRemove)
  router.post(baseRouter + '/admin/login',controller.admin.adminLogin)

};
