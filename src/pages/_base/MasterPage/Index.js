import './Styles.less';

import React from 'react';
import BasePage from '../BasePage';
import Menu from '../../../components/Menu';

/**
 * Master page for application, 
 * contains rendering of footer and header
 */
class MasterPage extends BasePage {

  renderHeader = () => {
    return (
      <header className='masterPage-header'>
        <div className='masterPage-wrapper'>
          <div className={this.props.wrapperClass}>
            <Menu {...this.props}/>
          </div>
        </div>
      </header>
    );
  }

  renderFooter = () => {
    return (
      <footer className='masterPage-footer'>
        <div className={`masterPage-menu ${this.props.wrapperClass}`}>
          <div className='masterPage-col col-xs-12 col-sm-3 col-md-3 col-lg-3'>
            <div className='masterPage-item'>
              <a href='/about/' className='link'>О компании</a>
            </div>
            <div className='masterPage-item'>
              <a href='/' className='link'>Оставить отзыв</a>
            </div>
            <div className='masterPage-item'>
              <a href='/' className='link'>Вопросы-ответы</a>
            </div>
            <div className='masterPage-item'>
              <a href='/' className='link'>Условия доставки</a>
            </div>
          </div>

          <div className='masterPage-col col-xs-12 col-sm-4 col-md-4col-lg-4'>
            <div className='masterPage-item'>
              <a href='/' className='link'>Оплата</a>
            </div>
            <div className='masterPage-item'>
              <a href='/' className='link'>Акции</a>
            </div>
            <div className='masterPage-item'>
              <a href='/' className='link'>Информация о продукции</a>
            </div>
          </div>

          <div className='masterPage-col col-xs-12 col-sm-5 col-md-5 col-lg-5'>
            <div className='masterPage-links'>
              <div className='masterPage-item'>
                <a href='https://twitter.com/?lang=ru' target='_blank'>
                <svg xmlns='http://www.w3.org/2000/svg' 
                     width='30' 
                     height='30' 
                     viewBox='0 0 24 24'>
                  <path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z'/>
                </svg>
                </a>
              </div>
              <div className='masterPage-item'>
                <a href='https://ru-ru.facebook.com/' target='_blank'>
                  <svg xmlns='http://www.w3.org/2000/svg' 
                     width='30' 
                     height='30'    
                     viewBox='0 0 24 24'>
                    <path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10   10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12    12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.5   8.778c-.441.196-.916.328-1.414.388.509-.305.898-.787    1.083-1.362-.476.282-1.003.487-1.564.597-.448-.479-1.089-.778-1.796-.778-1.59 0-2.758 1.483-2.399    3.023-2.045-.103-3.86-1.083-5.074-2.572-.645 1.106-.334  2.554.762 3.287-.403-.013-.782-.124-1.114-.308-.027 1.14.791  2.207 1.975 2.445-.346.094-.726.116-1.112.042.313.978 1.224  1.689 2.3 1.709-1.037.812-2.34 1.175-3.647 1.021 1.09.699 2.383 1.106 3.773 1.106 4.572 0 7.154-3.861  6.998-7.324.482-.346.899-.78 1.229-1.274z'/>
                  </svg>
                </a>
              </div>
              <div className='masterPage-item'>
                <a href='https://vk.com/' target='_blank'>
                  <svg xmlns='http://www.w3.org/2000/svg' 
                   width='30' 
                   height='30'         
                   viewBox='0 0 24 24'>
                    <path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.581 15.997c.304 0 .429-.204.425-.458-.016-.958.356-1.474 1.03-.802.744.744.896 1.26 1.801 1.26h1.601c.403 0 .562-.13.562-.334 0-.432-.711-1.194-1.312-1.752-.844-.783-.882-.802-.156-1.744.9-1.169 2.079-2.667 1.037-2.667h-1.991c-.387 0-.414.217-.551.542-.498 1.173-1.443 2.693-1.803 2.461-.377-.243-.204-1.203-.175-2.63.008-.377.006-.636-.571-.77-.314-.073-.621-.103-.903-.103-1.137 0-1.922.477-1.477.56.785.146.711 1.846.527 2.58-.319 1.278-1.518-1.012-2.018-2.152-.12-.275-.155-.488-.586-.488h-1.627c-.247 0-.394.08-.394.258 0 .301 1.479 3.36 2.892 4.885 1.379 1.487 2.742 1.354 3.689 1.354z'/>
                  </svg>
                </a>
              </div>
              <div className='masterPage-item'>
                <a href='https://www.instagram.com/?hl=ru' target='_blank'>
                  <svg xmlns='http://www.w3.org/2000/svg' 
                       width='30' 
                       height='30' 
                       viewBox='0 0 24 24'>
                      <path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.082c1.602 0 1.792.006 2.425.035 1.627.074 2.385.845 2.46 2.459.028.633.034.822.034 2.424s-.006 1.792-.034 2.424c-.075 1.613-.832 2.386-2.46 2.46-.633.028-.822.035-2.425.035-1.602 0-1.792-.006-2.424-.035-1.63-.075-2.385-.849-2.46-2.46-.028-.632-.035-.822-.035-2.424s.007-1.792.035-2.424c.074-1.615.832-2.386 2.46-2.46.632-.029.822-.034 2.424-.034zm0-1.082c-1.63 0-1.833.007-2.474.037-2.18.1-3.39 1.309-3.49 3.489-.029.641-.036.845-.036 2.474 0 1.63.007 1.834.036 2.474.1 2.179 1.31 3.39 3.49 3.49.641.029.844.036 2.474.036 1.63 0 1.834-.007 2.475-.036 2.176-.1 3.391-1.309 3.489-3.49.029-.64.036-.844.036-2.474 0-1.629-.007-1.833-.036-2.474-.098-2.177-1.309-3.39-3.489-3.489-.641-.03-.845-.037-2.475-.037zm0 2.919c-1.701 0-3.081 1.379-3.081 3.081s1.38 3.081 3.081 3.081 3.081-1.379 3.081-3.081c0-1.701-1.38-3.081-3.081-3.081zm0 5.081c-1.105 0-2-.895-2-2 0-1.104.895-2 2-2 1.104 0 2.001.895 2.001 2s-.897 2-2.001 2zm3.202-5.922c-.397 0-.72.322-.72.72 0 .397.322.72.72.72.398 0 .721-.322.721-.72 0-.398-.322-.72-.721-.72z'/>
                    </svg>
                  </a>
                </div>
              <div className='masterPage-item' style={{ paddingRight: 0 }}>
                <a href='https://www.youtube.com/?gl=RU' target='_blank'>
                  <svg xmlns='http://www.w3.org/2000/svg' 
                       width='30' 
                       height='30' 
                       viewBox='0 0 24 24'>
                    <path d='M16.23 7.102c-2.002-.136-6.462-.135-8.461 0-2.165.148-2.419 1.456-2.436 4.898.017 3.436.27 4.75 2.437 4.898 1.999.135 6.459.136 8.461 0 2.165-.148 2.42-1.457 2.437-4.898-.018-3.436-.271-4.75-2.438-4.898zm-6.23 7.12v-4.444l4.778 2.218-4.778 2.226zm2-12.222c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z'/>
                  </svg>
                </a>
              </div>
              </div>
              <div className='masterPage-copyrates'>
                <p>© 2006-2018 Logo Pizza.</p>
                <p>Все права защищены.</p>
              </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default MasterPage;