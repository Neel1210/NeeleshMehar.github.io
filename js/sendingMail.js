function sendMail() {
  let data = $("#contact-form").serialize();
  var formData = new URLSearchParams(data);
  var name = formData.get("name");
  var mail = formData.get("email");
  var message = formData.get("message");
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "scatraningandplacement@gmail.com",
    Password: "152DF8D9E23A5DDAB7C6911ADF48ACF1C85E",
    To: "contact@neeleshmehar.in",
    From: "scatraningandplacement@gmail.com",
    Subject: "Response From WebSite By :- "+name,
    Body:
      "Response ,\nName : " + name +
      "\nMail : " + mail +
      "\nMessage : " + message,
  }).then((message) => {
    alert("Thanks For Contacting ")
    location.reload();
  });
}

var Email = {
  send: function (a) {
    return new Promise(function (n, e) {
      (a.nocache = Math.floor(1e6 * Math.random() + 1)), (a.Action = "Send");
      var t = JSON.stringify(a);
      Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) {
        n(e);
      });
    });
  },
  ajaxPost: function (e, n, t) {
    var a = Email.createCORSRequest("POST", e);
    a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
      (a.onload = function () {
        var e = a.responseText;
        null != t && t(e);
      }),
      a.send(n);
  },
  ajax: function (e, n) {
    var t = Email.createCORSRequest("GET", e);
    (t.onload = function () {
      var e = t.responseText;
      null != n && n(e);
    }),
      t.send();
  },
  createCORSRequest: function (e, n) {
    var t = new XMLHttpRequest();
    return (
      "withCredentials" in t
        ? t.open(e, n, !0)
        : "undefined" != typeof XDomainRequest
        ? (t = new XDomainRequest()).open(e, n)
        : (t = null),
      t
    );
  },
};
