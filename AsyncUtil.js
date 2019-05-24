class AsyncUtil
{
   static async forEach(array, callback) {
       if(Array.isArray(array)) {
           for (let index = 0; index < array.length; index++) {
               await callback(array[index], index, array);
           }
       }
    }
}

Array.prototype.asyncForEach = async function(cb) {
    await AsyncUtil.forEach(this, cb);
};

module.exports = AsyncUtil;
