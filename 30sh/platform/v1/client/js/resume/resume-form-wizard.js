import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '../../views/candidate/resume/resume-form-wizard.html';

Template.resume_form_1.events({
    'click button#gotostep2' (event, instance) {
        console.log("go to step 2");
    }
});

Template.resume_form_2.events({
    'click button#gotostep3' (event, instance) {
        console.log("go to step 3");
    }
});

Template.resume_form_3.events({
    'click button#gotostep3' (event, instance) {
        console.log("go to step 3");
    }
});