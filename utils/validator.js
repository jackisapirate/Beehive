export default{
    /**
     * validate the Email
     * @param {Email} email 
     * @returns 
     */
    validatorEmail(email){
        const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z])+$/;
        return reg.test(email);
    }
}