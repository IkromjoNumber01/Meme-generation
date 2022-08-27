

function showMeme(){
    
    const randomMemeUrl = getRandomData('memes');
    
    const container = document.querySelector('.meme-content');

const newElement = document.createElement('img');

newElement.setAttribute('src', randomMemeUrl);

const isImg = container.querySelector('img');

if(isImg) {
    container.innerHTML = '';
}

container.appendChild(newElement);

}



function getRandomData(type){
    return data[type][rn(data[type].length)];
}



const memes = 
['https://www.researchgate.net/publication/344603358/figure/fig1/AS:945655560286208@1602473263829/Example-of-Cat-Meme_Q640.jpg',
'https://i.ytimg.com/vi/sxrzdev5l3A/maxresdefault.jpg',
'https://content.wepik.com/statics/5901675/preview-page0.jpg',
'https://i.scdn.co/image/ab67706c0000bebb6fc7dd59d13ed9787746ea6a',
'https://images.news18.com/ibnlive/uploads/2021/08/1627984405_untitled-design-2-1200x800.jpg?impolicy=website&width=510&height=356',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBVYKgiE918IAPRJVtC8C8nbyaG5vggSknDg&usqp=CAU',
'https://clideo.com/files/content/twitter-meme-maker-1.png',
'https://www.lifesize.com/wp-content/uploads/2020/10/Meme-header-2.jpeg',
'https://i.pinimg.com/736x/24/b5/57/24b557157ff233d040cb2d5087aea4bb.jpg',
'https://www.adobe.com/express/create/media_1ddffaf2c9990b84507151f4c587f221a1601643f.jpeg?width=400&format=jpeg&optimize=medium',
'https://e3.365dm.com/20/04/2048x1152/skynews-cat-meme-coronavirus_4967171.jpg',
'https://media.istockphoto.com/vectors/gangster-pixelated-attributes-vector-id1063060736?k=20&m=1063060736&s=612x612&w=0&h=NlFoyF6szNtjbIKOSsA0aDeoofSkyRyzBPBP7_TzCdQ=',
'https://i.imgflip.com/2d52fv.jpg',
'https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/canvas/2021/10/30/85f2cb5f-44f8-4f2f-a813-63e657e11acc_5065cac7.jpg?itok=gY-K9HdU&v=1635566576',
'https://www.cyberlink.com/prog/learning-center/html/6476/PDR19-YouTube-47_The_Best_App_for_Making_Memes/img/photodirector.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUa9_h20_MYR3G8IeZtnVawOocLZGmCa3gGw&usqp=CAU',
'https://media.timeout.com/images/105685537/image.jpg',
'https://i0.wp.com/i.pinimg.com/736x/95/13/67/951367c657bb3bbdd66f5c5b9a2526ba.jpg?resize=160,120'];

function rn(len){
    return Math.floor(Math.random() * len);
}

const data = {
    memes
};