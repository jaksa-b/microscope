/**
 * Created by Jakša Bašić on 15/09/15.
 */

// check that the userId specified owns the documents
ownsDocument = function(userId, doc) {
    return doc && doc.userId === userId;
};