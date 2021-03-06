const sgMail = require("@sendgrid/mail")

const sendgridAPIkey = process.env.SENDGRID_API_KEY

sgMail.setApiKey(sendgridAPIkey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to:         email,
        from:       process.env.SGMAIL_EMAIL,
        subject:    "Thanks for Joining TaskTracker.io",
        text:       `Welcome to the app, ${name}.
                    Let us know how you get along with the app!\n
                    the TaskTracker Team`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to:         email,
        from:       process.env.SGMAIL_EMAIL,
        subject:    "We're sorry to see you leave",
        text:       `We're sorry to see you leave ${name}.
                    Let us know what we could do differently next time in a reply email!\n
                    the TaskTracker Team`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail,
}
