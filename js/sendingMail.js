import * as nodemailer from '../node_modules/nodemailer/lib/nodemailer';


function sendMain()
{
    const transporter = nodemailer.createTransport({
        host: 'smtp.elasticemail.com', // Use the appropriate SMTP service (e.g., 'Gmail', 'Outlook', 'Yahoo', etc.)
        port: 2525,
        auth: {
          user: '1210neelesh@gmail.com', // Your email address
          pass: '8CB99C635C6DE5D557024CBEFB87CE973178' // Your email password or application-specific password
        }
    });

    const mailOptions = {
        from: '1210neelesh@gmail.com', // Sender's email address
        to: 'contact@neeleshmehar.in', // Receiver's email address
        subject: 'Message from '+name, // Email subject
        text: ''+message+"\n\nEmail -"+mail // Email body (plain text)
      };

    transporter.sendMail(mailOptions, function(error, info) {
        alert("Sending");
        if (error) {
          console.error('Error:', error);
          alert(error);
        } else {
          alert('Email sent:', info.response);
          console.log('Email sent:', info.response);
           var messageAlert = 'alert-' + name; var messageText = message; var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>'; if (messageAlert && messageText) { $('#contact-form').find('.messages').html(alertBox); if (messageAlert == "alert-success") { $('#contact-form')[0].reset(); } }
        }
      });
}