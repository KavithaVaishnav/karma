var myapp = angular.module("MyApp",['ui.bootstrap','pascalprecht.translate']);

  // config function
  myapp.config(function($translateProvider){
     
     $translateProvider.translations('en',{
          
          title: 'My To Do Application',
          taskId: 'Task Id',
          taskName: 'Task Name',
          mark: 'Mark Completed',
          removeTask:'Remove Task',
          add :'add',
          cancel:'cancel',
          remove : 'remove'
        
     });
     $translateProvider.translations('hn',{
          
          title: 'मेरा आवेदन',
          taskId: 'कार्य आईडी',
          taskName: 'कार्य का नाम',
          mark: 'मार्क पूरा',
          removeTask:'कार्य को दूर',
          add :'जोड़ना',
          cancel:'रद्द करे',
          remove : 'हटा'
        
     });
     $translateProvider.translations('tn',{
          
          title: ' எனது  பயன்பாடு ',
          taskId: 'பணி ஐடி',
          taskName: 'பணி பெயர்',
          mark: 'குறி நிறைவு',
          removeTask: 'பணி நீக்க',
          add :' கூட்டு',
          cancel:'  எதிராணை',
          remove : ' நீக்கு'
        
     });
      $translateProvider.preferredLanguage('en');
  });
 // config function ends