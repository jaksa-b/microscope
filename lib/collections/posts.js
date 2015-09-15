/**
 * Created by Jakša Bašić on 13/09/15.
 */
Posts = new Mongo.Collection('posts');

Posts.allow({
    insert: function (userId, doc) {
        return !! userId;
    }
});