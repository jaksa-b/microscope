/**
 * Created by Jakša Bašić on 12/09/15.
 */
Template.postsList.helpers({
    posts: function () {
        return Posts.find({},{sort: {submitted: -1}});
    }
});