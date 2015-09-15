/**
 * Created by Jakša Bašić on 13/09/15.
 */
Meteor.publish('posts', function () {
   return Posts.find();
});
