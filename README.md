Bootstrap-Validator
===================

bootstrapValidator packaging for meteorjs


Add New Validations
-------------------

Validations can be added on a template as shown below:

    Template.newTemplate.rendered = function(){
        $('.form-horizontal').bootstrapValidator({
            message: 'This value is not valid',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                username: {
                    message: 'The username is not valid',
                    validators: {
                        notEmpty: {
                            message: 'UserName is mandatory'
                        }
                    }
                }
            }
        });
    }

Further details of bootstrapValidator can be referred at https://github.com/nghuuphuoc/bootstrapvalidator 
