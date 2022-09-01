import React from 'react'; 
import Error404Img from '@/images/errors/404';
import Error500Img from '@/images/errors/500';

const ErrorPage = ({ code = 404, children }) => (
  <div className="error-page">
    <div className="item">
      <img src={code == 404 ? Error404Img : Error500Img} />
      <div className="text">
        <h1 className="error-page-code">{code}</h1>
        {children}
      </div>
    </div>
  </div>
);

export default ErrorPage;
