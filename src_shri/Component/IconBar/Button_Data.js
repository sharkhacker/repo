import img from '../../logo.svg';
import sourceImg from '../../icons/source.svg'
import stockImg from '../../icons/stock.svg'
import uniflowImg from '../../icons/uniflow.svg'
import linkImg from '../../icons/link.svg'
import variableImg from '../../icons/variable.svg'
import constantImg from '../../icons/constant.svg'

export const button_data = [
    {
        id: 1,  //displayKey are same as this for popups
        name: 'Stock',
        imgPath: stockImg,
        onClick: function(){
            console.log('Button 1 clicked');
        }
    
        },
    {
        id: 2,
        name: 'Source',
        imgPath: sourceImg,
        onClick: () => {
            console.log('Button 2 clicked');
            }
        },
    {
        id: 3,
        name: 'Flow',
        imgPath: uniflowImg,
        onClick: () => {
            console.log('Button 3 clicked');
            }
    },
    
    {
        id: 4,
        name: 'Link',
        imgPath: linkImg,
        onClick: () => {
            console.log('Button 4 clicked');
            }
        },
    {
        id: 5,
        name: 'Constant',
        imgPath: constantImg,
        onClick: () => {
            console.log('Button 5 clicked');
            }
        },
    {
        id: 6,
        name: 'Variable',
        imgPath: variableImg,
        onClick: () => {
            console.log('Button 6 clicked');
            }
        },
    
    
    
]