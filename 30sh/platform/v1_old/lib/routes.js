//template from: http://jobpress.wecookcode.com/demo/post-resume-form.html#0
if (Meteor.isClient) {
    BlazeLayout.setRoot("#root");

    FlowRouter.route('/', {
        name: 'Default',
        action() {
            BlazeLayout.render('App_body', {
                main: ''
            });
        }
    });

    FlowRouter.route('/candidate/register', {
        name: 'resume_wizard',
        action() {
            BlazeLayout.render('App_body', {
                main: 'resume_wizard'
            });
        }
    });

}