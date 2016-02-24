
var _env = "production";
  (function () {
    angular.module("globals.yookore", [])
          .factory("ProjectGlobals", ProjectGlobals);

  ProjectGlobals.$inject = ['$rootScope', '$log'];

  function ProjectGlobals($rootScope, $log) {
    $log.log(">>> ProjectGlobals");

      var accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJhMDcxZDZiYS1lNDMyLTQwYzktOTBhYy0xYmFjZWFmYzZhNjMiLCJzdWIiOiJkZjE0MGVlOC1iY2ZmLTQwM2YtODZkZi02OWQ1ZWNlOWIwOWIiLCJzY29wZSI6WyJvcGVuaWQiLCJwYXNzd29yZC53cml0ZSIsIm9hdXRoLmFwcHJvdmFscyJdLCJjbGllbnRfaWQiOiJ1c2VyYWNjb3VudCIsImNpZCI6InVzZXJhY2NvdW50IiwiYXpwIjoidXNlcmFjY291bnQiLCJncmFudF90eXBlIjoicGFzc3dvcmQiLCJ1c2VyX2lkIjoiZGYxNDBlZTgtYmNmZi00MDNmLTg2ZGYtNjlkNWVjZTliMDliIiwidXNlcl9uYW1lIjoicGltaXNpIiwiZW1haWwiOiJwaW1pc2lAeWFob28uY29tIiwicmV2X3NpZyI6ImFiYWE1NWNiIiwiaWF0IjoxNDQ4NTQyMDc1LCJleHAiOjE3NjM5MDIwNzUsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC91YWEvb2F1dGgvdG9rZW4iLCJ6aWQiOiJ1YWEiLCJhdWQiOlsidXNlcmFjY291bnQiLCJvcGVuaWQiLCJwYXNzd29yZCIsIm9hdXRoIl19.Hype1sbt7cdYd4MTcUsG4FJGlLf-_I3wmI7BKV1pcPw";
      var _env = "production";
      var currentUserObject = undefined;      // 1deg. The logged in user object from the login service
      var currentRouteUserObject = undefined; // 2deg. The object of the user whose url is loaded
      var userProfileObject = undefined;      // 3deg. The current logged in user object


      return {
          accessToken: accessToken,
          _env: _env,
          currentRouteUser: currentRouteUser,
          currentRouteUserObject: currentRouteUserObject,
          userProfileObject: userProfileObject,
          currentUserObject: currentUserObject,
          loggedInUser: loggedInUser,


          storeProfileObject: storeProfileObject,
          retrieveProfileObject: retrieveProfileObject,
          updateProfileObject: updateProfileObject,
          updateProfileObjectWithArray: updateProfileObjectWithArray,
          setProfileObjectPrimaryType: setProfileObjectPrimaryType,
          httpAuthenticationToken: '',
          isLoggedInUser: isLoggedInUser,
          userMenu: userMenu,
          siteRoutes: siteRoutes,
          infoMessageDelay: infoMessageDelay,
          infoMessageDelayMedium: infoMessageDelayMedium,
          infoMessageDelayShort: infoMessageDelayShort,
          infoMessageDelayInstant: infoMessageDelayInstant,
          minimumAgeAllowed: minimumAgeAllowed,
          maxLength: maxLength,
          minLength: minLength,
          media: media,
          contextKeys: contextKeys
      }

      var jsonString = "";

      if (jsonString) {
          currentRouteUserObject = jsonString;//JSON.parse(jsonString);
          if (!currentRouteUserObject || currentRouteUserObject.length <= 0 || currentRouteUserObject == 0) {
              currentRouteUserObject = undefined;
          }
      }

      var jsonString_userProfile = "";

      if (jsonString_userProfile) {

          userProfileObject = jsonString_userProfile;

          if (!userProfileObject || userProfileObject.length <= 0 || userProfileObject == 0) {
              userProfileObject = undefined;
          } else {


          }
      }

      var jsonString_currentUserString = "";

      if (jsonString_currentUserString) {
          currentUserObject = jsonString_currentUserString;
      }

      // set page object if it exist


      // set group object if it exist


      // set sponsorship object if it exist



      var contextKeys = {
          'profileInfo': 'profileInformation',
          'groupInfo': 'groupInformation',
          'friendsList': 'listOfFriends',
          'membersList': 'listOfGroupMembers',
          'groupOwnerSettingsInfo': 'settingsOfGroupOwnerInfo',
          'blockedMembersList': 'listOfBlockedMembers',
          'requestToJoinGroupList': 'listOfRequestToJoinGroup',
          'invitationToJoinGroupList': 'listOf invitationsToJoinGroup',
          'adminGroupList': 'listOfAdministratorsInGroup',
          'usersFollowing': 'listOfUserCurrentUserIsFollowing',
          'followers': 'listOfUserFollowingCurrentUser',
          'requestsSent': 'friendsRequestsSent',
          'requestsReceived': 'friendsRequestsReceived',
          'blockedFriendsList': 'listOfBlockedFriends',
          'photos': {
              'albumList': "listOfAlbums",
              'albumPhotosList': "listOfPhotosInAnAlbums",
              'photosList': "listOfPhotos",
              'photoDetail': "detailOfPhoto",
              'isNotReload': "isNotRouteReload"
          },
          'isNotReload': "routeIsNotReloaded",
          friends: {
              list: "listOfFriends",
              recommended: "listOfRecommendedFriends",
              blocked: "listOfBlockedFriends",
          },
          blogposts: {
              list: "listOfUsersBlogposts",
              recent: "listOfRecentBlogPosts",
              suggested: "listOfSuggestedBlogposts"
          },
          groups: {
              selectList: "groupsSelectList",
              authoredList: "listOfGroupsAuthored",
              joinedList: "listOfGroupsJoined"
          },
          pages: {
              selectList: "pagesSelectList",
              ownedList: "listOfPagesOwnedByCurrentUser",
              followingList: "listOfPagesBeingFollowed",
              followers: "listOfUsersFollowingAPage"
          },
          'activityStream': "activityStreamBaseObject",
          'profileCardStats': "statisticsForProfileCard",
          'commentList': "listOfCommentsForAParticularPost",
          'terms': "siteTerms"
      }


      var currentRouteUser = '';
      var loggedInUser = ''

      if (currentRouteUserObject && currentRouteUserObject.hasOwnProperty('username')) {
          currentRouteUser = currentRouteUserObject.username;
      }

      var isLoggedInUser = true;

      $rootScope.profileRetrievedKey = 'profileRetrieved';
      $rootScope.profileStoredKey = 'profileStored';


      var profileInfoContextKey = contextKeys.profileInfo;

      if (currentRouteUser && currentRouteUser != 'None') {
          profileInfoContextKey += '_' + currentRouteUser;
          $rootScope.profileRetrievedKey += currentRouteUser;
          $rootScope.profileStoredKey += currentRouteUser;
      }

      $rootScope.profileInfoContextKey = profileInfoContextKey;

      if ($rootScope[$rootScope.profileStoredKey] == undefined) {
          $rootScope[$rootScope.profileStoredKey] = false;
      }

      if ($rootScope[$rootScope.profileRetrievedKey] == undefined) {
          $rootScope[$rootScope.profileRetrievedKey] = false;
      }

      if (isLoggedInUser) {
          currentRouteUserObject = userProfileObject;
      }

      var storeProfileObject = function () {
          if (currentRouteUserObject) {
              // Store in the base Service
              BaseStateService.setContextData(profileInfoContextKey, currentRouteUserObject);

              // Store in the WebStorage

          }

      }

      storeProfileObject();
      $rootScope[$rootScope.profileStoredKey] = true;

      var retrieveProfileObject = function () {
          var returnObject = BaseStateService.getContextData(profileInfoContextKey);





          if (returnObject) {
              $rootScope[$rootScope.profileRetrievedKey] = true;
          }

          return returnObject;
      }

      var updateProfileObject = function (newValueObject) {

          if (isLoggedInUser) {
              currentRouteUserObject = !currentRouteUserObject ? {} : currentRouteUserObject;

              angular.forEach(newValueObject, function (value, key) {
                  if (currentRouteUserObject.hasOwnProperty(key)) {
                      currentRouteUserObject[key] = value;
                  }
              });

              BaseStateService.setContextData(contextKeys.profileInfo, currentRouteUserObject);
          }

      }

      var updateProfileObjectWithArray = function (arrayKey, newValueObject, type) {

          if (isLoggedInUser) {
              currentRouteUserObject = !currentRouteUserObject ? {} : currentRouteUserObject;

              if (type == 'delete') {
                  currentRouteUserObject[arrayKey] = $filter('filter')
                  (currentRouteUserObject[arrayKey], function (value, key) {
                      return value && value.id != newValueObject.id;
                  });
              } else if (type == 'add') {
                  // append to the list
                  if (angular.isArray(currentRouteUserObject[arrayKey])) {
                      currentRouteUserObject[arrayKey].push(newValueObject)
                  } else {
                      currentRouteUserObject[arrayKey] = [newValueObject];
                  }
              } else if (type == 'set') {
                  currentRouteUserObject[arrayKey] = newValueObject;
              }

              BaseStateService.setContextData(contextKeys.profileInfo, currentRouteUserObject);
          }
      }

      var setProfileObjectPrimaryType = function (arrayKey, targetId) {
          if (isLoggedInUser) {
              if (currentRouteUserObject) {
                  if (angular.isArray(currentRouteUserObject[arrayKey])) {
                      angular.forEach(currentRouteUserObject[arrayKey], function (value, key) {
                          if (value.id == targetId) {
                              currentRouteUserObject[arrayKey][key]['isprimary'] = true;
                          } else {
                              currentRouteUserObject[arrayKey][key]['isprimary'] = false;
                          }
                      });
                  }
                  BaseStateService.setContextData(contextKeys.profileInfo, currentRouteUserObject);
              }
          }
      }


      var userMenu = [

          {
              id: 'profile',
              label: 'My Profile',
              url: "/profile/",
              imageSrc: "/static/images/icons/profile.png"
          },

          {
              id: 'photo',
              label: 'Photos',
              url: "/profile/#/photos",
              imageSrc: "/static/images/icons/photo-grey.png"
          },
          {
              id: 'blog',
              label: 'Blogposts',
              url: "/profile/#/blogposts",
              imageSrc: "/static/images/icons/blogs.png"
          },

          {
              id: 'friends',
              label: 'Friends',
              url: "/profile/#/friends",
              imageSrc: "/static/images/icons/ico_friends.png"
          },
          {
              id: 'pages',
              label: 'Pages',
              url: "/profile/#/pages",
              imageSrc: "/static/images/icons/pgs.png"
          },
          {
              id: 'groups',
              label: 'Groups',
              url: "/profile/#/groups",
              imageSrc: "/static/images/icons/grp.png"
          },
          {
              id: 'games',
              label: 'Games',
              url: "/games/",
              imageSrc: "",
              icon: "ion-ios-game-controller-b",
              isolated: true
          }


      ];

      var siteRoutes = {
          sponsor: "/sponsorship/",
          profile: "/profile/",
          status: "/profile/#/status",
          audio: "/audio/",
          photos: "/profile/#/photos",
          blogposts: "/profile/#/blogposts",
          videos: "/profile/#/videos",
          friends: "/profile/#/friends",
          pages: "/profile/#/pages",
          groups: "/profile/#/groups",
          messages: "/profile/#/messages",
          settings: "/settings/"
      }

      // The amount of time to elapse before an information message is dismissed
      var infoMessageDelay = 10000;
      var infoMessageDelayMedium = 5000;
      var infoMessageDelayShort = 1000;
      var infoMessageDelayInstant = 500;

      var minimumAgeAllowed = 13;

      var maxLength = {
          album: {name: 400, description: -1},
          statusUpdate: {text: 400, photo: 400},
          blogPost: {title: 400, body: -1}, //-1 indicates 'unbound'
          photo: {caption: 400},
          video: {caption: 400, description: -1},
          post: 400,
          comment: 400,
          page: {title: 400, description: -1},
          group: {title: 400, description: -1},
          firstname: 50,
          lastname: 50,
          biography: 400,
          email: 255,
          contact: 15,
          school: {name: 200},
          work: {company: 150},
          group: {name: 200, description: 500, email: 255, contact: 15},
          page: {name: 200, description: 500, email: 255, contact: 15}
      }

      var minLength = {
          password: 6
      }

      var media = {
          video: {
              formats: ['MP4', '3GP', 'AVI', 'WMV', 'FLV'],
              maxSize: '200MB',
              minSize: '1KB'
          },
          photo: {
              formats: ['JPG', 'TIFF', 'PNG', 'GIF', 'JPEG', 'BMP'],
              maxSize: '10MB',
              minSize: '1KB',
              maxAttachment: {
                  albumPhoto: 20,
                  statusUpdate: 10,
                  blogPost: 10,
                  groupPost: 10
              }
          }
      }



  }
})();
