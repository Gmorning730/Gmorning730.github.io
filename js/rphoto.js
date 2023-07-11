let backimg =["url(https://cdn.pixabay.com/photo/2020/12/19/20/55/tavern-5845319_1280.jpg)",
"url(https://cdn.pixabay.com/photo/2021/10/22/11/13/tree-6732358_1280.jpg)",
"url(https://cdn.pixabay.com/photo/2020/09/22/20/13/beach-5594231_1280.jpg),
"url(https://cdn.pixabay.com/photo/2020/11/28/20/33/shore-5785685_1280.jpg)",
"url(https://cdn.pixabay.com/photo/2020/12/22/21/26/mountains-5853360_1280.jpg)",
"url(https://cdn.pixabay.com/photo/2020/04/11/05/29/architecture-5028845_1280.jpg)",
"url(https://cdn.pixabay.com/photo/2021/03/07/10/19/coast-6075814_1280.jpg)",
"url(https://cdn.pixabay.com/photo/2016/09/28/14/16/old-town-1700592_1280.jpg)",
"url(https://cdn.pixabay.com/photo/2016/09/11/00/56/greece-1660496_1280.jpg)",
"url(https://cdn.pixabay.com/photo/2016/04/30/14/07/tavern-1362960_1280.jpg)",
"url(https://cdn.pixabay.com/photo/2020/04/09/06/35/tavern-5019944_1280.jpg)"];
let index =Math.ceil(Math.random() * (backimg.length-1));
document.getElementById("web_bg").style.backgroundImage = backimg[index]