const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendWelcomeEmail = (email: string, name: string): void => {
   sgMail
      .send({
         to: email,
         from: 'admin@gmail.com',
         subject: 'Thank for joining Task App!',
         text: `Hello ${name}`,
      })
      .then(() => console.log('message sent'))
      .catch((e) => console.log(e));
};

export const sendFarewellEmail = (email: string, name: string): void => {
   sgMail.send({
      to: email,
      from: 'admin@gmail.com',
      subject: 'We are sad that you are leaving us',
      text: `Hey ${name} your account have been successfully deleted. You can help us with improving our platform`,
   });
};
