const names = [
  'Cluain Móna',
  'Cluain Glas',
  'Cluain Dubh',
  'Cluain Bán',
  'Cluain Ruadh',
  'Cluain Buí',
  'Cluain Liath',
  'Cluain Dearg',
  'Cluain Uaine',
  'Cluain Odhar',
  'Garrán Fraoch',
  'Garrán Aitinn',
  'Garrán Draighean',
  'Garrán Sceach',
  'Garrán Dris',
  'Garrán Neantóg',
  'Garrán Lus',
  'Garrán Féar',
  'Garrán Bláth',
  'Garrán Duilleog',
  'Llwyn Grug',
  'Llwyn Eithin',
  'Llwyn Draenen',
  'Llwyn Ysgall',
  'Llwyn Mieri',
  'Llwyn Berllys',
  'Llwyn Blodau',
  'Llwyn Dail',
  'Llwyn Canghenau',
  'Llwyn Gwraidd',
  'Prysglwyn Glas',
  'Prysglwyn Du',
  'Prysglwyn Gwyn',
  'Prysglwyn Coch',
  'Prysglwyn Melyn',
  'Prysglwyn Llwyd',
  'Prysglwyn Gwyrdd',
  'Prysglwyn Arian',
  'Prysglwyn Aur',
  'Prysglwyn Copr',
  'Perllwyn Mawr',
  'Perllwyn Bach',
  'Perllwyn Uchel',
  'Perllwyn Isel',
  'Perllwyn Hir',
  'Perllwyn Byr',
  'Perllwyn Llydan',
  'Perllwyn Cul',
  'Perllwyn Trwm',
  'Perllwyn Ysgafn',
  'Rhedynlwyn',
  'Gruglwyn',
  'Eithínlwyn',
  'Draenenlwyn',
  'Ysgalllwyn',
  'Mierlwyn',
  'Berllylwyn',
  'Blodaulwyn',
  'Daillwyn',
  'Canghenlwyn',
  'Coedlan Glas',
  'Coedlan Du',
  'Coedlan Gwyn',
  'Coedlan Coch',
  'Coedlan Melyn',
  'Coedlan Llwyd',
  'Coedlan Gwyrdd',
  'Coedlan Arian',
  'Coedlan Aur',
  'Coedlan Copr',
  'Prysglais Mawr',
  'Prysglais Bach',
  'Prysglais Uchel',
  'Prysglais Isel',
  'Prysglais Hir',
  'Prysglais Byr',
  'Prysglais Llydan',
  'Prysglais Cul',
  'Prysglais Trwm',
  'Prysglais Ysgafn',
  'Manglais Grug',
  'Manglais Eithin',
  'Manglais Draenen',
  'Manglais Ysgall',
  'Manglais Mieri',
  'Manglais Berllys',
  'Manglais Blodau',
  'Manglais Dail',
  'Manglais Canghenau',
  'Manglais Gwraidd',
  'Corslwyn Glas',
  'Corslwyn Du',
  'Corslwyn Gwyn',
  'Corslwyn Coch',
  'Corslwyn Melyn',
  'Corslwyn Llwyd',
  'Corslwyn Gwyrdd',
  'Corslwyn Arian',
  'Corslwyn Aur',
  'Corslwyn Copr',
  'Mawnlwyn Mawr',
  'Mawnlwyn Bach',
  'Mawnlwyn Uchel',
  'Mawnlwyn Isel',
  'Mawnlwyn Hir',
  'Mawnlwyn Byr',
  'Mawnlwyn Llydan',
  'Mawnlwyn Cul',
  'Mawnlwyn Trwm',
  'Mawnlwyn Ysgafn',
  'Rhosgrug',
  'Rhoseithin',
  'Rhosdraenen',
  'Rhosysgall',
  'Rhosmieri',
  'Rhosberllys',
  'Rhosblodau',
  'Rhosdail',
  'Rhoscanghenau',
  'Rhosgwraidd',
  'Gwaunrug',
  'Gwauneithin',
  'Gwaundraenen',
  'Gwaunysgall',
  'Gwaunmieri',
  'Gwaunberllys',
  'Gwaunblodau',
  'Gwaundail',
  'Gwauncanghenau',
  'Gwaungwraidd',
  'Dolrug',
  'Doleithin',
  'Doldraenen',
  'Dolysgall',
  'Dolmieri',
  'Dolberllys',
  'Dolblodau',
  'Doldail',
  'Dolcanghenau',
  'Dolgwraidd',
  'Maesrug',
  'Maeseithin',
  'Maesdraenen',
  'Maesysgall',
  'Maesmieri',
  'Maesberllys',
  'Maesblodau',
  'Maesdail',
  'Maescanghenau',
  'Maesgwraidd',
  'Caerug',
  'Caeeithin',
  'Caedraenen',
  'Caeysgall',
  'Caemieri',
  'Caeberllys',
  'Caeblodau',
  'Caedail',
  'Caecanghenau',
  'Caegwraidd',
  'Tirrug',
  'Tireithin',
  'Tirdraenen',
  'Tirysgall',
  'Tirmieri',
  'Tirberllys',
  'Tirblodau',
  'Tirdail',
  'Tircanghenau',
  'Tirgwraidd',
  'Gwernrug',
  'Gwerneithin',
  'Gwerndraenen',
  'Gwernysgall',
  'Gwernmieri',
  'Gwernberllys',
  'Gwernblodau',
  'Gwerndail',
  'Gwerncanghenau',
  'Gwerngwraidd',
  'Ffyddrug',
  'Ffyddeithin',
  'Ffydddraenen',
  'Ffyddysgall',
  'Ffyddmieri',
  'Ffyddberllys',
  'Ffyddblodau',
  'Ffydddail',
  'Ffyddcanghenau',
  'Ffyddgwraidd',
  'Mynyddrug',
  'Mynyddeithin',
  'Mynydddraenen',
  'Mynyddysgall',
  'Mynyddmieri',
  'Mynyddberllys',
  'Mynyddblodau',
  'Mynydddail',
  'Mynyddcanghenau',
  'Mynyddgwraidd',
  'Brynrug',
  'Bryneithin',
  'Bryндraenen',
  'Brynysgall',
  'Brynmieri',
  'Brynberllys',
  'Brynblodau',
  'Bryndail',
  'Bryncanghenau',
  'Bryngwraidd',
  'Cwmrug',
  'Cwmeithin',
  'Cwmdraenen',
  'Cwmysgall',
  'Cwmmieri',
  'Cwmberllys',
  'Cwmblodau',
  'Cwmdail',
  'Cwmcanghenau',
  'Cwmgwraidd',
  'Glynrug',
  'Glyneithin',
  'Glyndraenen',
  'Glynysgall',
  'Glynmieri',
  'Glynberllys',
  'Glynblodau',
  'Glyndail',
  'Glyncanghenau',
  'Glyngwraidd',
  'Penrug',
  'Peneithin',
  'Pendraenen',
  'Penysgall',
  'Penmieri',
  'Penberllys',
  'Penblodau',
  'Pendail',
  'Pencanghenau',
  'Pengwraidd',
  'Ynysrug',
  'Ynyseithin',
  'Ynysdraenen',
  'Ynysysgall',
  'Ynysmieri',
  'Ynysberllys',
  'Ynysblodau',
  'Ynysdail',
  'Ynyscanghenau',
  'Ynysgwraidd',
  'Traethrug',
  'Traetheithin',
  'Traethdraenen',
  'Traethysgall',
  'Traethmieri',
  'Traethberllys',
  'Traethblodau',
  'Traethdail',
  'Traethcanghenau',
  'Traethgwraidd',
  'Porthrug',
  'Portheithin',
  'Porthdraenen',
  'Porthysgall',
  'Porthmieri',
  'Porthberllys',
  'Porthblodau',
  'Porthdail',
  'Porthcanghenau',
  'Porthgwraidd',
  'Aberrug',
  'Abereithin',
  'Aberdraenen',
  'Aberysgall',
  'Abermieri',
  'Aberberllys',
  'Aberblodau',
  'Aberdail',
  'Abercanghenau',
  'Abergwraidd',
  'Baerug',
  'Baeeithin',
  'Baedraenen',
  'Baeysgall',
  'Baemieri',
  'Baeberllys',
  'Baeblodau',
  'Baedail',
  'Baecanghenau',
  'Baegwraidd',
  'Môrrug',
  'Môreithin',
  'Môrdraenen',
  'Môrysgall',
  'Môrmieri',
  'Môrberllys',
  'Môrblodau',
  'Môrdail',
  'Môrcanghenau',
  'Môrgwraidd',
  'Clogwynrug',
  'Clogwyneithin',
  'Clogwyndraenen',
  'Clogwynysgall',
  'Clogwynmieri',
  'Clogwynberllys',
  'Clogwynblodau',
  'Clogwyndail',
  'Clogwyncanghenau',
  'Clogwyngwraidd',
  'Craigrug',
  'Craigeithin',
  'Craigdraenen',
  'Craigysgall',
  'Craigmieri',
  'Craigberllys',
  'Craigblodau',
  'Craigdail',
  'Craigcanghenau',
  'Craiggwraidd',
  'Carregrug',
  'Carregeithin',
  'Carregdraenen',
  'Carregysgall',
  'Carregmieri',
  'Carregberllys',
  'Carregblodau',
  'Carregdail',
  'Carregcanghenau',
  'Carreggwraidd',
  'Maenrug',
  'Maeneithin',
  'Maendraenen',
  'Maenysgall',
  'Maenmieri',
  'Maenberllys',
  'Maenblodau',
  'Maendail',
  'Maencanghenau',
  'Maengwraidd',
  'Cerrigrug',
  'Cerrigeithin',
  'Cerrigdraenen',
  'Cerrigysgall',
  'Cerrigmieri',
  'Cerrigberllys',
  'Cerrigblodau',
  'Cerrigdail',
  'Cerrigcanghenau',
  'Cerriggwraidd',
  'Garregrug',
  'Garregeithin',
  'Garregdraenen',
  'Garregysgall',
  'Garregmieri',
  'Garregberllys',
  'Garregblodau',
  'Garregdail',
  'Garregcanghenau',
  'Garreggwraidd',
  'Murrug',
  'Mureithin',
  'Murdraenen',
  'Murysgall',
  'Murmieri',
  'Murberllys',
  'Murblodau',
  'Murdail',
  'Murcanghenau',
  'Murgwraidd',
  'Clawddrug',
  'Clawddeithin',
  'Clawdddraenen',
  'Clawddysgall',
  'Clawddmieri',
  'Clawddberllys',
  'Clawddblodau',
  'Clawdddail',
  'Clawddcanghenau',
  'Clawddgwraidd',
  'Ffinrug',
  'Ffineithin',
  'Ffindraenen',
  'Ffinysgall',
  'Ffinmieri',
  'Ffinberllys',
  'Ffinblodau',
  'Ffindail',
  'Ffincanghenau',
  'Ffingwraidd',
  'Terfynrug',
  'Terfyneithin',
  'Terfyndraenen',
  'Terfynysgall',
  'Terfynmieri',
  'Terfynberllys',
  'Terfynblodau',
  'Terfyndail',
  'Terfyncanghenau',
  'Terfyngwraidd',
  'Garrán na Fraoch',
  'Garrán na hAitinne',
  'Garrán an Draighean',
  'Garrán na Sceiche',
  'Garrán na Drise',
  'Garrán na Neantóige',
  'Garrán an Lus',
  'Garrán an Fhéir',
  'Garrán na Blátha',
  'Garrán na Duilleoge',
  'Garrán na Géige',
  'Garrán na Craoibhe',
  'Garrán an Stoic',
  'Garrán an Bhun',
  'Garrán na Fréimhe',
  'Garrán an Bharr',
  'Garrán na Buaice',
  'Garrán an Mhullaigh',
  'Garrán na Stuaice',
  'Garrán an Chorrán',
  'Garrán na Binne',
  'Garrán an Bheanna',
  'Garrán an tSléibhe',
  'Garrán an Chnoic',
  'Garrán an Tulaigh',
  'Garrán an Ardáin',
  'Garrán na hAbhann',
  'Garrán an tSrutha',
  'Garrán na hEascainn',
  'Garrán an Inbhir',
  'Garrán na Cala',
  'Garrán an Chabháin',
  'Garrán na Linne',
  'Garrán an Aigéin',
  'Garrán na Mara',
  'Garrán an Chuain',
  'Garrán na Farraige',
  'Garrán an Cladaigh',
  'Garrán na Láibe',
  'Garrán an Ghaineamh',
  'Garrán na Portaige',
  'Garrán an Mhachaire',
  'Garrán na Páirce',
  'Garrán an Gharraí',
  'Garrán na Cloiche',
  'Garrán na hAilme',
  'Garrán an Staic',
  'Garrán na Creige',
  'Garrán an tSléibhe',
  'Garrán na Binne',
  'Garrán an Fhiodh',
  'Garrán an Doire',
  'Garrán an Gharráin',
  'Garrán na Machaire',
  'Garrán na Móna',
  'Garrán an Ghleanna',
  'Garrán an Rois',
  'Garrán na hInse',
  'Garrán an Phoirt',
  'Garrán an Mhargaidh',
  'Garrán na Mainistreach',
  'Garrán an Lios',
  'Garrán na Rátha',
  'Garrán an Dúin',
  'Garrán an Chaisleáin',
  'Garrán na Cille',
  'Garrán an Teampaill',
  'Garrán na Toibre',
  'Garrán an Droichid',
  'Garrán na Carraige',
  'Garrán an Locha',
  'Garrán na Trá',
  'Garrán an Chnoic',
  'Garrán na Coille',
  'Garrán na hAbhann'
];

export default names;