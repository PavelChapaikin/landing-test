const Html = ({
  body
}) => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <link rel="stylesheet" type="text/css" href="/css/main.css" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href='https://fonts.googleapis.com/css?family=Raleway:400,300,500,600,700,800,900' rel='stylesheet' type='text/css'>
      <link href='https://fonts.googleapis.com/css?family=Lato:400,100,100italic,300,300italic,400italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>
      <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,800,700,600' rel='stylesheet' type='text/css'>
      <link rel="stylesheet" media="screen" href="css/owl.transitions.css" />
      <link rel="stylesheet" media="screen" href="css/owl.theme.css" />
      <link rel="stylesheet" media="screen" href="css/owl.carousel.css" />
      <link rel="stylesheet" media="screen" href="css/pe-icon-7-stroke.css" />
      <link rel="stylesheet" media="screen" href="css/font-awesome.min.css" />
      <link rel="stylesheet" media="screen" href="css/animate.css" />
      <link rel="stylesheet" media="screen" href="css/bootstrap.min.css" />
      <link rel="stylesheet" media="screen" href="style.css"/>
      <link rel="stylesheet" media="screen" href="css/responsive.css"/>
      
    </head>
    <body>
      <div id="root">${body}</div>
      <script type="text/javascript" src="/js/bundle.js?v=COMMITHASH"></script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
      <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.3.min.js"><\/script>')</script>
      <script type="text/javascript" src="js/jquery.animateNumber.min.js"></script>
      <script type="text/javascript" src="js/jquery.appear.js"></script>
      <script type="text/javascript" src="js/wow.min.js"></script>
      <script type="text/javascript" src="js/owl.carousel.min.js"></script>
      <script type="text/javascript" src="js/jquery.mixitup.min.js"></script>
      <script type="text/javascript" src="js/vendor/bootstrap.min.js"></script>
      <script type="text/javascript" src="js/gmap.js"></script>
      <script src="js/plugins.js"></script>
      <script src="js/main.js"></script>
    </body>
  </html>
`
}

export default Html
