export const generateTemplate = (
  name: string,
  email: string,
  telephone: string,
  city: string,
  subject: string,
  content: string
) => {
  return `<!DOCTYPE html>
  <html
    lang="pt-BR"
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office"
  >
    <head>
      <title>Casa da Criança e do Adolescente</title>
      <!--[if !mso]><!-- -->
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <!--<![endif]-->
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <style type="text/css">
        #outlook a {
          padding: 0;
        }
  
        body {
          margin: 0;
          padding: 0;
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
  
        table,
        td {
          border-collapse: collapse;
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
        }
  
        img {
          border: 0;
          height: auto;
          line-height: 100%;
          outline: none;
          text-decoration: none;
          -ms-interpolation-mode: bicubic;
        }
  
        p {
          display: block;
          margin: 13px 0;
        }
      </style>
      <!--[if mso]>
        <xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG />
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      <![endif]-->
      <!--[if lte mso 11]>
        <style type="text/css">
          .mj-outlook-group-fix {
            width: 100% !important;
          }
        </style>
      <![endif]-->
      <style type="text/css">
        @media only screen and (min-width: 480px) {
          .mj-column-per-100 {
            width: 100% !important;
            max-width: 100%;
          }
        }
      </style>
      <style type="text/css">
        @media only screen and (max-width: 480px) {
          table.mj-full-width-mobile {
            width: 100% !important;
          }
  
          td.mj-full-width-mobile {
            width: auto !important;
          }
        }
      </style>
      <style type="text/css">
        a,
        span,
        td,
        th {
          -webkit-font-smoothing: antialiased !important;
          -moz-osx-font-smoothing: grayscale !important;
        }
      </style>
    </head>
  
    <body style="background-color: #ffffff">
      <div style="background-color: #ffffff">
        <!--[if mso | IE]>
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
        >
          <tr>
            <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
        <![endif]-->
        <div style="margin: 0px auto; max-width: 600px">
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            role="presentation"
            style="width: 100%"
          >
            <tbody>
              <tr>
                <td
                  style="
                    direction: ltr;
                    font-size: 0px;
                    padding: 20px 0;
                    padding-bottom: 0px;
                    text-align: center;
                  "
                >
                  <!--[if mso | IE]>
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                  
          <tr>
        
              <td
                 class="" style="vertical-align:top;width:600px;"
              >
            <![endif]-->
                  <div
                    class="mj-column-per-100 mj-outlook-group-fix"
                    style="
                      font-size: 0px;
                      text-align: left;
                      direction: ltr;
                      display: inline-block;
                      vertical-align: top;
                      width: 100%;
                    "
                  >
                    <table
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="vertical-align: top"
                      width="100%"
                    >
                      <tbody>
                        <tr>
                          <td
                            align="left"
                            style="font-size: 0px; padding: 10px 25px; word-break: break-word"
                          >
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="border-collapse: collapse; border-spacing: 0px"
                            >
                              <tbody>
                                <tr>
                                  <td style="width: 50px">
                                    <img
                                      alt="logo-CCA"
                                      height="auto"
                                      src="cid:logoCCA"
                                      style="
                                        border: 0;
                                        display: block;
                                        outline: none;
                                        text-decoration: none;
                                        height: auto;
                                        width: 15rem;
                                        font-size: 14px;
                                      "
                                      width="50"
                                    />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td
                            align="left"
                            style="font-size: 0px; padding: 10px 25px; word-break: break-word"
                          >
                            <div
                              style="
                                font-family: Helvetica, Arial, sans-serif;
                                font-size: 18px;
                                font-weight: 400;
                                line-height: 24px;
                                text-align: left;
                                color: #434245;
                              "
                            >
                              <h1
                                style="
                                  margin: 0;
                                  font-size: 24px;
                                  line-height: normal;
                                  font-weight: bold;
                                "
                              >
                                E-mail de ${subject}<br />
                                enviado por ${name}.
                              </h1>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!--[if mso | IE]>
              </td>
            
          </tr>
        
                    </table>
                  <![endif]-->
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--[if mso | IE]>
            </td>
          </tr>
        </table>
        
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
        >
          <tr>
            <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
        <![endif]-->
        <div style="margin: 0px auto; max-width: 600px">
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            role="presentation"
            style="width: 100%"
          >
            <tbody>
              <tr>
                <td
                  style="
                    direction: ltr;
                    font-size: 0px;
                    padding: 20px 0;
                    padding-bottom: 0px;
                    text-align: center;
                  "
                >
                  <!--[if mso | IE]>
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                  
          <tr>
        
              <td
                 class="" style="vertical-align:top;width:600px;"
              >
            <![endif]-->
                  <div
                    class="mj-column-per-100 mj-outlook-group-fix"
                    style="
                      font-size: 0px;
                      text-align: left;
                      direction: ltr;
                      display: inline-block;
                      vertical-align: top;
                      width: 100%;
                    "
                  >
                    <table
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="vertical-align: top"
                      width="100%"
                    >
                      <tbody>
                        <tr>
                          <td
                            align="left"
                            style="font-size: 0px; padding: 10px 25px; word-break: break-word"
                          >
                            <div
                              style="
                                font-family: Helvetica, Arial, sans-serif;
                                font-size: 18px;
                                font-weight: 400;
                                line-height: 24px;
                                text-align: left;
                                color: #434245;
                              "
                            >
                              <p style="margin: 0">
                                Olá, Recebemos um novo e-mail através do formulário em nosso site.
                                Segue abaixo o conteúdo da mensagem:
                              </p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td
                            align="left"
                            style="font-size: 0px; padding: 10px 25px; word-break: break-word"
                          >
                            <div
                              style="
                                font-family: Helvetica, Arial, sans-serif;
                                font-size: 18px;
                                font-weight: 400;
                                line-height: 24px;
                                text-align: left;
                                color: #434245;
                              "
                            >
                              <p style="margin: 0">${content}</p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!--[if mso | IE]>
              </td>
            
          </tr>
        
                    </table>
                  <![endif]-->
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--[if mso | IE]>
            </td>
          </tr>
        </table>
        
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
        >
          <tr>
            <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
        <![endif]-->
        <div style="margin: 0px auto; max-width: 600px">
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            role="presentation"
            style="width: 100%"
          >
            <tbody>
              <tr>
                <td style="direction: ltr; font-size: 0px; padding: 20px 0 0; text-align: center">
                  <!--[if mso | IE]>
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                  
          <tr>
        
              <td
                 class="" style="vertical-align:top;width:600px;"
              >
            <![endif]-->
                  <div
                    class="mj-column-per-100 mj-outlook-group-fix"
                    style="
                      font-size: 0px;
                      text-align: left;
                      direction: ltr;
                      display: inline-block;
                      vertical-align: top;
                      width: 100%;
                    "
                  >
                    <table
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="vertical-align: top"
                      width="100%"
                    >
                      <tbody>
                        <tr>
                          <td
                            align="left"
                            style="font-size: 0px; padding: 10px 25px 0; word-break: break-word"
                          >
                            <div
                              style="
                                font-family: Helvetica, Arial, sans-serif;
                                font-size: 18px;
                                font-weight: 400;
                                line-height: 24px;
                                text-align: left;
                                color: #434245;
                              "
                            >
                              <h2
                                style="
                                  margin: 0;
                                  font-size: 18px;
                                  line-height: normal;
                                  font-weight: bold;
                                "
                              >
                                Aqui estão os detalhes do remetente:
                              </h2>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td
                            align="left"
                            style="font-size: 0px; padding: 10px 25px 0; word-break: break-word"
                          >
                            <div
                              style="
                                font-family: Helvetica, Arial, sans-serif;
                                font-size: 18px;
                                font-weight: 400;
                                line-height: 24px;
                                text-align: left;
                                color: #434245;
                              "
                            >
                              <p style="margin: 0">
                                <strong style="font-size: 14px; color: #999; line-height: 18px"
                                  >Nome:</strong
                                ><br />
                                ${name}
                              </p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td
                            align="left"
                            style="font-size: 0px; padding: 10px 25px 0; word-break: break-word"
                          >
                            <div
                              style="
                                font-family: Helvetica, Arial, sans-serif;
                                font-size: 18px;
                                font-weight: 400;
                                line-height: 24px;
                                text-align: left;
                                color: #434245;
                              "
                            >
                              <p style="margin: 0">
                                <strong style="font-size: 14px; color: #999; line-height: 18px"
                                  >Cidade:</strong
                                ><br />
                                ${city}
                              </p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td
                            align="left"
                            style="font-size: 0px; padding: 10px 25px 0; word-break: break-word"
                          >
                            <div
                              style="
                                font-family: Helvetica, Arial, sans-serif;
                                font-size: 18px;
                                font-weight: 400;
                                line-height: 24px;
                                text-align: left;
                                color: #434245;
                              "
                            >
                              <p style="margin: 0">
                                <strong style="font-size: 14px; color: #999; line-height: 18px"
                                  >E-mail:</strong
                                ><br />
                                ${email}
                              </p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td
                            align="left"
                            style="font-size: 0px; padding: 10px 25px; word-break: break-word"
                          >
                            <div
                              style="
                                font-family: Helvetica, Arial, sans-serif;
                                font-size: 18px;
                                font-weight: 400;
                                line-height: 24px;
                                text-align: left;
                                color: #434245;
                              "
                            >
                              <p style="margin: 0">
                                <strong style="font-size: 14px; color: #999; line-height: 18px"
                                  >Telefone:</strong
                                ><br />
                                ${telephone
                                  .charAt(0)
                                  .concat(telephone.charAt(1))
                                  .concat('-')
                                  .concat(telephone.slice(2))}
                              </p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!--[if mso | IE]>
              </td>
            
          </tr>
        
                    </table>
                  <![endif]-->
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--[if mso | IE]>
            </td>
          </tr>
        </table>
        
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
        >
          <tr>
            <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
        <![endif]-->
        <div style="margin: 0px auto; max-width: 600px">
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            role="presentation"
            style="width: 100%"
          >
            <tbody>
              <tr>
                <td
                  style="
                    direction: ltr;
                    font-size: 0px;
                    padding: 20px 0;
                    padding-top: 0px;
                    text-align: center;
                  "
                >
                  <!--[if mso | IE]>
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                  
          <tr>
        
              <td
                 class="" style="vertical-align:top;width:600px;"
              >
            <![endif]-->
        <!--[if mso | IE]>
            </td>
          </tr>
        </table>
        
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
        >
          <tr>
            <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
        <![endif]-->
        <div style="margin: 0px auto; max-width: 600px">
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            role="presentation"
            style="width: 100%"
          >
            <tbody>
              <tr>
                <td
                  style="
                    direction: ltr;
                    font-size: 0px;
                    padding: 20px 0;
                    padding-top: 0;
                    text-align: center;
                  "
                >
                  <!--[if mso | IE]>
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                  
          <tr>
        
              <td
                 class="" style="vertical-align:top;width:600px;"
              >
            <![endif]-->
                  <div
                    class="mj-column-per-100 mj-outlook-group-fix"
                    style="
                      font-size: 0px;
                      text-align: left;
                      direction: ltr;
                      display: inline-block;
                      vertical-align: top;
                      width: 100%;
                    "
                  >
                    <table
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="vertical-align: top"
                      width="100%"
                    >
                      <tbody>
                        <tr>
                          <td style="font-size: 0px; padding: 10px 25px; word-break: break-word">
                            <p
                              style="
                                border-top: dashed 1px lightgrey;
                                font-size: 1px;
                                margin: 0px auto;
                                width: 100%;
                              "
                            ></p>
                            <!--[if mso | IE]>
                              <table
                                align="center"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                style="
                                  border-top: dashed 1px lightgrey;
                                  font-size: 1px;
                                  margin: 0px auto;
                                  width: 550px;
                                "
                                role="presentation"
                                width="550px"
                              >
                                <tr>
                                  <td style="height: 0; line-height: 0">&nbsp;</td>
                                </tr>
                              </table>
                            <![endif]-->
                          </td>
                        </tr>
                        <tr>
                          <td
                            align="left"
                            style="font-size: 0px; padding: 10px 25px; word-break: break-word"
                          >
                            <div
                              style="
                                font-family: Helvetica, Arial, sans-serif;
                                font-size: 18px;
                                font-weight: 400;
                                line-height: 24px;
                                text-align: left;
                                color: #434245;
                              "
                            >
                              CNPJ: 01.375.045/0001-03.<br/>
                              © 2023 Casa da Criança e do Adolescente
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!--[if mso | IE]>
              </td>
            
          </tr>
        
                    </table>
                  <![endif]-->
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--[if mso | IE]>
            </td>
          </tr>
        </table>
        
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
        >
          <tr>
            <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
        <![endif]-->
        <div style="margin: 0px auto; max-width: 600px">
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            role="presentation"
            style="width: 100%"
          >
            <tbody>
              <tr>
                <td style="direction: ltr; font-size: 0px; padding: 20px 0; text-align: center">
                  <!--[if mso | IE]>
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                  
          <tr>
        
              <td
                 class="" style="vertical-align:top;width:600px;"
              >
            <![endif]-->
                  <div
                    class="mj-column-per-100 mj-outlook-group-fix"
                    style="
                      font-size: 0px;
                      text-align: left;
                      direction: ltr;
                      display: inline-block;
                      vertical-align: top;
                      width: 100%;
                    "
                  >
                    <table
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="vertical-align: top"
                      width="100%"
                    >
                      <tbody>
                        <tr>
                          <td style="font-size: 0px; word-break: break-word">
                            <!--[if mso | IE]>
      
          <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="1" style="vertical-align:top;height:1px;">
        
      <![endif]-->
                            <div style="height: 1px"> </div>
                            <!--[if mso | IE]>
      
          </td></tr></table>
        
      <![endif]-->
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!--[if mso | IE]>
              </td>
            
          </tr>
        
                    </table>
                  <![endif]-->
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--[if mso | IE]>
            </td>
          </tr>
        </table>
        <![endif]-->
      </div>
    </body>
  </html>
  `;
};
