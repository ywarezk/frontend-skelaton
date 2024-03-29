/**
* this file will hold store settings for proper communication with the backend
*
* @copyright: nerdeez.com Ltd.
* @version: 1.0
* @author: Yariv Katz
* @copyright: nerdeez.com Ltd.
*/


/**
 * handles backend communication
 */
Fitagift.Store = DS.Store.extend({
	
	/**
	 * our adapter
	 */
	adapter: Nerdeez.DjangoTastypieAdapter.extend({
	    /**
	     * adapter hook to set the server url
	     */
	    serverDomain : SERVER_URL,
	    
	    /**
	     * hook if we want to use cross domain communication
	     */
	    wormhole: Nerdeez.Wormhole,
	    
	    /**
	     * our serializer
	     */
	    serializer: Nerdeez.DjangoTastypieSerializer.extend({})
	})
});