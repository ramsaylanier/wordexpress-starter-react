import React, {Component, PropTypes} from 'react';


class Html extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    assets: PropTypes.object,
    content: PropTypes.string
  }

  render () {
    const PROD = process.env.NODE_ENV === 'production';

    const {
      title,
      assets,
      url,
      context,
      content
    } = this.props;

    const {
      manifest,
      app,
      vendor
    } = assets || {};

    
    return (
     <html>
       <head>
         <meta charSet="utf-8"/>
         <title>{title}</title>

         {PROD && <link rel="stylesheet" href="/static/prerender.css" type="text/css" />}
       </head>
       <body>
         {PROD ? <div id="root" dangerouslySetInnerHTML={{__html: content}}></div> : <div id="root"></div>}
          {PROD && <script dangerouslySetInnerHTML={{__html: manifest.text}}/>}
          {PROD && <script src={vendor.js}/>}
         <script src={PROD ? app.js : '/static/app.js'} />
       </body>
     </html>
    );
  }

}

export default Html;
