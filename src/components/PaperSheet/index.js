// import './template-styles/paper-a3.css'
import './template-styles/paper-a4.css'
// import './template-styles/paper-uslegal.css'
// import './template-styles/paper-usletter.css'
// import './template-styles/paper-ustabloid.css'

import SelectSheetTemplateEl from '../common/SelectSheetStyle'
import PageOffsetEl from '../common/PageOffsetEl'

const HeaderContainerEl = document.getElementById('header-container')

HeaderContainerEl.appendChild(PageOffsetEl)
HeaderContainerEl.appendChild(SelectSheetTemplateEl)
