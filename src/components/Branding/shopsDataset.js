import keinomori from '../../assets/img/branding/keinomori.png';

import shop01_1 from '../../assets/img/branding/shops/01/pic_map_keinomorinakamozu01.jpg';
import shop01_2 from '../../assets/img/branding/shops/01/pic_map_keinomorinakamozu02.jpg';
import shop01_3 from '../../assets/img/branding/shops/01/pic_map_keinomorinakamozu03.jpg';
import shop01_4 from '../../assets/img/branding/shops/01/pic_map_keinomorinakamozu04.jpg';
import shop02_1 from '../../assets/img/branding/shops/02/pic_map_keinomorisenboku01.jpg';
import shop02_2 from '../../assets/img/branding/shops/02/pic_map_keinomorisenboku02.jpg';
import shop02_3 from '../../assets/img/branding/shops/02/pic_map_keinomorisenboku03.jpg';
import shop02_4 from '../../assets/img/branding/shops/02/pic_map_keinomorisenboku04.jpg';
import shop03_1 from '../../assets/img/branding/shops/03/pic_map_keinomoritondabayashi01.jpg';
import shop03_2 from '../../assets/img/branding/shops/03/pic_map_keinomoritondabayashi02.jpg';
import shop03_3 from '../../assets/img/branding/shops/03/pic_map_keinomoritondabayashi03.jpg';
import shop03_4 from '../../assets/img/branding/shops/03/pic_map_keinomoritondabayashi04.jpg';

const map01 = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6571.771974665185!2d135.507585!3d34.556442!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5dcb1a53f5fcfdb6!2z6Lu944Gu5qOuIOOBquOBi-OCguOBmuW6lw!5e0!3m2!1sja!2sjp!4v1593740036119!5m2!1sja!2sjp";
const map02 = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6577.737554556842!2d135.499501!3d34.480853!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4c8a8079794e8e37!2z6Lu944Gu5qOuIOazieWMl-W6lw!5e0!3m2!1sja!2sjp!4v1593742127266!5m2!1sja!2sjp";
const map03 = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5625.407967301643!2d135.60028!3d34.505174!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x72c58225a33f4d1!2z6Lu944Gu5qOuIOWvjOeUsOael-W6lw!5e1!3m2!1sja!2sjp!4v1604023691648!5m2!1sja!2sjp";

const scene01 = "https://www.google.com/maps/embed?pb=!4v1593742539088!6m8!1m7!1sCAoSLEFGMVFpcE9zT2o1Qm5LY2RVT2NEc3ZCYkM3elBVc2hLQV84d0NvclFUZDNq!2m2!1d34.556568492629!2d135.50768853003!3f316.84!4f0.7099999999999937!5f1.299169533619291";
const scene02 = "https://www.google.com/maps/embed?pb=!4v1593742475490!6m8!1m7!1sCAoSLEFGMVFpcFBNemhLTjFYRHRhc0YxM2ozc1VuTVpVMUJXOHRJeGxmWlhjcTFB!2m2!1d34.480933240763!2d135.49945968269!3f259.5!4f0!5f1.299169533619291";
const scene03 = "https://www.google.com/maps/embed?pb=!4v1604030190235!6m8!1m7!1sCAoSLEFGMVFpcE81QVZqNjhXM3dlN1NCYTJOeFpQbW01U0p3dG80T3FZYlA4bnpX!2m2!1d34.505254903599!2d135.60022325697!3f253.5!4f0!5f1.2961482151299428";

const shopsDataset = {
    'shops': [
        { id: "shop01", name: "軽の森 なかもず店" },
        { id: "shop02", name: "軽の森 泉北店" },
        { id: "shop03", name: "軽の森 富田林店" },
        { id: "shop01", name: "軽の森 泉大津店" },
        { id: "shop01", name: "車の森 もず店" },
        { id: "shop01", name: "車の森 なかもず店" },
        { id: "shop01", name: "軽パーク 富田林店" },
        { id: "shop01", name: "新車市場 堺鉄砲店" },
        { id: "shop01", name: "マッハ車検 なかもず店" },
        { id: "shop01", name: "マッハ車検 堺鉄砲店" },
        { id: "shop01", name: "マッハ車検 大阪挟山店" },
        { id: "shop01", name: "ピッカーズ" },
        { id: "shop01", name: "洗車の王国 なかもず店" },
        { id: "shop01", name: "洗車の王国 泉大津店" },
        { id: "shop01", name: "車両流通革命 堺鉄砲店" },
        { id: "shop01", name: "車両流通革命 なかもず店" },
        { id: "shop01", name: "KOUKIN" },
    ],
    'details': [
        {
            id: "modal_shop01", title: keinomori, dataExp: "軽未使用車販売", shop: "軽の森　なかもず店", postalCode: "591-8025", address: "大阪府堺市北区長曾根町 3083-10",
            phone: "0800-830-3329", fax: "072-240-0804", map: map01, scene: scene01, image: [shop01_1, shop01_2, shop01_3, shop01_4]
        },
        {
            id: "modal_shop02", title: keinomori, dataExp: "軽未使用車販売", shop: "軽の森　泉北店", postalCode: "590-0132", address: "大阪府堺市南区原山台 5-10-2",
            phone: "0800-830-3332", fax: "072-295-1778", map: map02, scene: scene02, image: [shop02_1, shop02_2, shop02_3, shop02_4]
        },
        {
            id: "modal_shop03", title: keinomori, dataExp: "軽未使用車販売", shop: "軽の森　富田林店", postalCode: "584-0025", address: "大阪府富田林市若松町西 1-1880",
            phone: "0800-830-3335", fax: "0721-23-8581", map: map03, scene: scene03, image: [shop03_1, shop03_2, shop03_3, shop03_4]
        },
    ]
}

export default shopsDataset;