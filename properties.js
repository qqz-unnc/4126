/**
 * Name as used as title for the main page
 * @type {string}
 */
var title = 'Intra-Vehicle Network Intrusion Detection'; // ✅ 必须改1：替换成你的文献综述主题

/**
 * Relative path to the data directory
 * @type {string}
 */
var dataDir = 'data/generated/'; // ✅ 必须改2：最核心！你的所有数据都在generated子文件夹里，原来的路径会导致找不到bib.js

/**
 * Relative path to the js directory
 * @type {string}
 */
var jsDir = 'js/';

/**
 * Relative path to the styles directory
 * @type {string}
 */
var stylesDir = 'styles/';

/**
 * Options for displaying tag clouds.
 * field: BibTeX field used for generating the tag clouds,
 * title: Title displayed as headline
 * minTagFrequency: minimum frequency of a tag to be displayed
 * @type {{field: string, title: string, minTagFrequency: number}[]}
 */
var tagCloudOptions = [{
    field: 'keywords',
    title: 'Keywords',
    minTagFrequency: 1
}, {
    field: 'author',
    title: 'Authors',
    minTagFrequency: 1
}]; // ✅ 必须改3：删掉最后一个series字段，你的bib里没有这个字段，会导致标签云生成失败

/**
 * If BibTeX entries (and tags) should be editable
 * @type {boolean}
 */
var editable = false; // ✅ 必须改4：作业用关闭编辑功能，避免别人修改，也不会加载多余的编辑器代码

/**
 * Subtitle describing the paper the data is referring to (set to null to deactivate)
 * @type {{html: string, id: string}}
 */
var paper = {
    html: '20 Papers on Deep Learning-based Cybersecurity', // 可选改：替换成你的副标题
    id: '' // 必须清空原来的样例id
};

/**
 * Extra pages like an about page that will be listed in the footer an can be opened on demand (page name -> path)
 */
var extraPages = {
    'about': 'about.html'
};

/**
 * Custom style as path to an extra css file (leave empty if not applicable)
 * @type {string}
 */
var customStyle = '';
/* Example for simplified entries */
//var customStyle = 'styles/custom_entries_simplified.css';

/**
 * Options for showing citation information (set to null to avoid showing any citation information)
 * minCitationCount: minimum number of citations of a paper to be displayed in the visualization
 * @type {{minCitationCount: number}}
 */
/* var citations = {
    minCitationCount: 5
}; */
var citations = null;
