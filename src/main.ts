import './style.css';

import parseProperties from '@ui5/webcomponents-base/dist/PropertiesFileFormat.js';
import {
  registerI18nLoader,
  getI18nBundle,
} from '@ui5/webcomponents-base/dist/i18nBundle.js';
import '@ui5/webcomponents/dist/Button.js';
import '@ui5/webcomponents/dist/Avatar.js';
import '@ui5/webcomponents/dist/Text.js';

import '@ui5/webcomponents/dist/Carousel.js';
import '@ui5/webcomponents/dist/Card.js';
import '@ui5/webcomponents/dist/List.js';
import '@ui5/webcomponents/dist/ListItemStandard.js';
import '@ui5/webcomponents-fiori/dist/Timeline.js';
import '@ui5/webcomponents-fiori/dist/TimelineItem.js';
import '@ui5/webcomponents/dist/Icon.js';

import '@ui5/webcomponents-icons/dist/command-line-interfaces.js';
import '@ui5/webcomponents-icons/dist/technical-object.js';
import '@ui5/webcomponents-icons/dist/wallet.js';
import '@ui5/webcomponents-icons/dist/collaborate.js';
import '@ui5/webcomponents-icons/dist/sap-ui5.js';
import '@ui5/webcomponents-icons/dist/cloud.js';
import '@ui5/webcomponents-icons/dist/work-history.js';
import '@ui5/webcomponents-icons/dist/education.js';
import '@ui5/webcomponents-icons/dist/building.js';

import '@ui5/webcomponents/dist/ListItemCustom.js';
import '@ui5/webcomponents/dist/Card.js';
import '@ui5/webcomponents/dist/CardHeader.js';

import Text from '@ui5/webcomponents/dist/Text.js';
import Timeline from '@ui5/webcomponents-fiori/dist/Timeline.js';

async function initializeApp() {
  const supportedLocales = ['en', 'fr', 'de', 'es'];
  supportedLocales.forEach(async (locale) => {
    registerI18nLoader(
      'github-page-ui5wc',
      locale,
      async (localeId: string) => {
        const response = await fetch(
          `./assets/messagebundle_${localeId}.properties`
        );
        const props = await response.text();
        return parseProperties(props);
      }
    );
  });

  const ResourceBundlerAccessor = await getI18nBundle('github-page-ui5wc');
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    
    <div class="card">
      <ui5-avatar id="profileAvatar" shape="Square" size="XL"class="ui5-avatar-root">
       <img alt="me" src="./assets/altarkawi_mohammed.jpg" class="ui5-avatar-root"/>
       </ui5-avatar>
      <ui5-text id="profileText"></ui5-text>
      <ui5-card>
        <ui5-card-header slot="header" title-text="${ResourceBundlerAccessor.getText(
          'experience'
        )}">
        </ui5-card-header>
        <ui5-timeline id="timeline">
        </ui5-timeline>
      </ui5-card>
    <ui5-carousel
        cyclic
        items-per-page="S1 M2 L3 XL3"
        arrows-placement="Navigation">
        <ui5-card class="small">
            <ui5-card-header slot="header" title-text="${ResourceBundlerAccessor.getText(
              'projects'
            )}" subtitle-text="Private">
                <img src="https://sap.github.io/ui5-webcomponents/images/avatars/man_avatar_1.png" alt="" slot="avatar">
            </ui5-card-header>
            <ui5-list separators="Inner">
                <ui5-li-custom type="Detail" class="ui5-list-item-custom">    
               <div class="list-item-content">
        <ui5-avatar slot="image" shape="Square">
                        <img src="https://sap.github.io/ui5-webcomponents/images/avatars/man_avatar_1.png" alt="Woman image">
                    </ui5-avatar>
        <span class="list-item-text">Profile Text</span>
      </div>
                    </ui5-li-custom>
            </ui5-list>
        </ui5-card>
        <ui5-card class="small">
            <ui5-card-header slot="header" title-text="${ResourceBundlerAccessor.getText(
              'projects'
            )}" subtitle-text="Job">
                <img src="https://sap.github.io/ui5-webcomponents/images/avatars/man_avatar_1.png" alt="" slot="avatar">
            </ui5-card-header>
            <ui5-list separators="Inner">
                <ui5-li-custom type="Detail" class="ui5-list-item-custom">        
                              <div class="list-item-content">
                        <ui5-avatar slot="image" shape="Square">
                                        <img src="https://sap.github.io/ui5-webcomponents/images/avatars/man_avatar_1.png" alt="Woman image">
                                    </ui5-avatar>
                        <span class="list-item-text">Profile Text</span>
                      </div>
                    </ui5-li-custom>
            </ui5-list>
        </ui5-card>
        <ui5-card class="medium">
            <ui5-card-header slot="header" title-text="${ResourceBundlerAccessor.getText(
              'skills'
            )}" subtitle-text="SAP" >
                <img src="./assets/SAP.png" alt="" slot="avatar">
            </ui5-card-header>
            <ui5-list separators="Inner">
                <ui5-li icon="technical-object" icon-end>ABAP Dictionary</ui5-li>
                <ui5-li icon="command-line-interfaces" icon-end>ABAP OO</ui5-li>
                <ui5-li icon="command-line-interfaces" icon-end>RESTful Application Programming (RAP)</ui5-li>
                <ui5-li icon="technical-object" icon-end>Core Data Services (CDS) Views</ui5-li>
                <ui5-li icon="sap-ui5" icon-end>SAPUI5 & Fiori Elements</ui5-li>
                <ui5-li icon="command-line-interfaces" icon-end>OData Services & Data Modeling</ui5-li>
                <ui5-li icon="cloud" icon-end>SAP Business Technology Platform (BTP)</ui5-li>        
            </ui5-list>
        </ui5-card>
        <ui5-card class="medium">
            <ui5-card-header slot="header" title-text="${ResourceBundlerAccessor.getText(
              'skills'
            )}" subtitle-text="${ResourceBundlerAccessor.getText('devSkills')}">
                <ui5-icon name="work-history" slot="avatar"></ui5-icon>
            </ui5-card-header>
            <ui5-list separators="Inner">
                <ui5-li >    
                <div class="list-item-content">
                      <img src="./assets/TS.png" alt="Profile" class="list-item-image">
                      <span class="list-item-text">TypeScript</span>
                </div>                
                </ui5-li>
        
                 <ui5-li >    
                <div class="list-item-content">
                      <img src="./assets/JS.png" alt="Profile" class="list-item-image">
                      <span class="list-item-text">JavaScript</span>
                </div>                
                </ui5-li>
                    <ui5-li >    
                <div class="list-item-content">
                      <img src="./assets/Python.png" alt="Profile" class="list-item-image">
                      <span class="list-item-text">Python</span>
                </div>                
                </ui5-li>
                 <ui5-li >    
                <div class="list-item-content">
                      <img src="./assets/npm.png" alt="Profile" class="list-item-image">
                      <span class="list-item-text">npm</span>
                </div>                
                </ui5-li>

                <ui5-li >    
                <div class="list-item-content">
                      <img src="./assets/SQL.png" alt="Profile" class="list-item-image">
                      <span class="list-item-text">SQL</span>
                </div>                
                </ui5-li>

            </ui5-list>
        </ui5-card>


        <ui5-card class="medium">
            <ui5-card-header slot="header" title-text="${ResourceBundlerAccessor.getText(
              'skills'
            )}" subtitle-text="${ResourceBundlerAccessor.getText('devOps')}">
                <ui5-icon name="work-history" slot="avatar"></ui5-icon>
            </ui5-card-header>
            <ui5-list separators="Inner">
                <ui5-li >    
                <div class="list-item-content">
                      <img src="./assets/vscode.png" alt="Profile" class="list-item-image">
                      <span class="list-item-text">Visual Studio & BAS</span>
                </div>                
                </ui5-li>
        
                 <ui5-li >    
                <div class="list-item-content">
                      <img src="./assets/GitHub.png" alt="Profile" class="list-item-image">
                      <span class="list-item-text">GitHub, GitLab, Azure Repo, Jenkins</span>
                </div>                
                </ui5-li>
                 <ui5-li >    
                <div class="list-item-content">
                      <img src="./assets/JIRA.png" alt="Profile" class="list-item-image">
                      <span class="list-item-text">JIRA</span>
                </div>                
                </ui5-li>

                <ui5-li >    
                <div class="list-item-content">
                      <img src="./assets/Agile.png" alt="Profile" class="list-item-image">
                      <span class="list-item-text">SCRUM & Agile Methodologies</span>
                </div>                
                </ui5-li>

            </ui5-list>
        </ui5-card>
    </ui5-carousel>
        <p class="read-the-docs" id="pageText">
    </p>
        </div>
  </div>
`;

  document.addEventListener('DOMContentLoaded', () => {
    // Attach event listeners to all detail buttons
    document.querySelectorAll('.detail-button').forEach((button) => {
      button.addEventListener('click', handleDetailClick);
    });
  });

  function handleDetailClick(event: { target: any }) {
    // Identify the button that was clicked
    const button = event.target;
    // Find the closest list-item content element
    const listItemContent = button.closest('.list-item-content');
    // Extract and alert the text content of the list item
    const itemText = listItemContent
      .querySelector('.list-item-text')
      .textContent.trim();
    alert(`Detail button clicked for: ${itemText}`);
  }

  const fromHauni = new Date(2019, 0).toLocaleDateString('EN-DE');
  const toHauni = new Date(2019, 6).toLocaleDateString('EN-DE');

  const fromImplico = new Date(2019, 7).toLocaleDateString('EN-DE');
  const toImplico = new Date(2022, 5).toLocaleDateString('EN-DE');

  const fromMSGGroup = new Date(2022, 6).toLocaleDateString('EN-DE');

  const aJobsData = [
    {
      id: 'timelineItem1',
      title: ResourceBundlerAccessor.getText('msgGroup'),
      text: ResourceBundlerAccessor.getText('msgGroupText', fromMSGGroup),
      role: ResourceBundlerAccessor.getText('msgGroupRole'),
      icon: 'building',
      link: 'https://www.msg.group/',
      date: 'Place Holder',
    },

    {
      id: 'timelineItem2',
      title: ResourceBundlerAccessor.getText('implico'),
      text: ResourceBundlerAccessor.getText(
        'implicoText',
        fromImplico,
        toImplico
      ),
      role: ResourceBundlerAccessor.getText('implicoRole'),
      icon: 'education',
      link: 'https://www.implico.com/',
      date: 'Place Holder',
    },

    {
      id: 'timelineItem3',
      title: ResourceBundlerAccessor.getText('hauni'),
      text: ResourceBundlerAccessor.getText('hauniText', fromHauni, toHauni),
      role: ResourceBundlerAccessor.getText('hauniRole'),
      icon: 'education',
      link: 'https://www.koerber-technologies.com/',
      date: 'Place Holder',
    },
  ];

  const timeline = document.getElementById('timeline') as Timeline;

  aJobsData.forEach((item) => {
    const timelineItem = document.createElement('ui5-timeline-item');
    timelineItem.setAttribute('id', item.id);
    timelineItem.setAttribute('title-text', item.role);
    if (item.text) {
      timelineItem.setAttribute('subtitle-text', item.text);
    }
    timelineItem.setAttribute('icon', item.icon);
    if (item.title) {
      timelineItem.setAttribute('name', item.title);
      timelineItem.setAttribute('name-clickable', '');
    }
    timelineItem.innerHTML = item.date;
    timeline.appendChild(timelineItem);
    timelineItem.addEventListener('name-click', () => {
      alert(`${item.title} clicked!`);
    });
  });

  const sAboutMe = ResourceBundlerAccessor.getText('aboutMe');
  const profileText = document.getElementById('profileText') as Text;
  profileText.textContent = sAboutMe;

  const sAboutPage = ResourceBundlerAccessor.getText('aboutPage');
  const pageText = document.getElementById('pageText') as Text;
  pageText.textContent = sAboutPage;
}

initializeApp();
