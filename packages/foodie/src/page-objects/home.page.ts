import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    //get inputSearch () { return $('~search_bar') }
    
   
    /**
     * a method to encapsule automation code to interact with the page
     */
    async searchFor(name: string) {
    //     await this.inputSearch.setValue(name);   
    //     await this.inputSearch.touchAction('tap');
         await $('~search_bar').clearValue();
         await $('~search_bar').setValue(name);   
         await $('~search_bar').touchAction('tap');
    }
    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('home');
    }
}

export default new HomePage();