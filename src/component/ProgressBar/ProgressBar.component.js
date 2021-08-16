import { ProgressBar as SourceProgressBar } from 'SourceComponent/ProgressBar/ProgressBar.component';
import './ProgressBar.extension.style'

class ProgressBar extends SourceProgressBar {
    colorHandler(){
        const {pathname} = window.location
        const exactPath = pathname.replace('/checkout/', '')
        if(exactPath === 'billing') {
            return 'rgb(173, 2, 2)'
        }
        if (exactPath === 'success') {
            return 'rgb(173, 2, 2)'
        }
    }

    // renderOk(){
    //     const {pathname} = window.location
    //     const exactPath = pathname.replace('/checkout/', '')
    //     let counter = 1
    //     if(exactPath === 'shipping') {

    //         return '1'
    //     }
    //     if (exactPath === 'billing') {
            
    //         return counter === 2 ? '&#10004;' : '2'
    //     }
    //     if (exactPath === 'success') {
    //         return '3'
    //     }
    // }

    renderProgressBar() {
    const {pathname} = window.location
    const exactPath = pathname.replace('/checkout/', '')
    console.log(exactPath)
        
    return (
        <div className='progressBarWrapper'>
            <div className='lineContainer-empty'>
            <div className='lineContainer-full' style={{width: "25%", backgroundColor: 'rgb(173, 2, 2)'}}></div>
            <div className='round-wrapper'>
                <div className='round'>{exactPath === 'shipping' ? '1' : <>&#10004;</>}</div>
                <div className='labels'>Shipping</div>
            </div>
                
                <div className='lineContainer-full' style={{width: "25%", backgroundColor: this.colorHandler()}}></div>
                <div className='round-wrapper'>
                <div className='round'>
                    {exactPath === 'billing'  && '2' }
                    {exactPath === 'shipping'  ? '2' : '' }
                    {exactPath === 'success' && <>&#10004;</>}
                    
                    </div>
                <div className='labels'>Billing</div>
            </div>
                
                <div className='lineContainer-full' style={{width: "25%", backgroundColor: this.colorHandler()}}></div>
                <div className='round-wrapper'>
                <div className='round'>
                {exactPath === 'success' ? <>&#10004;</> : '3'} 

                </div>
                <div className='labels'>Success</div>
            </div>
                <div className='lineContainer-full' style={{width: "25%", backgroundColor: this.colorHandler()}}></div>
            </div>
            
        </div>
    )
    }

}

export default ProgressBar;
