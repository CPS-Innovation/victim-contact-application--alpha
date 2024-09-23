
$(document).ready(function() {

  var meetingatttendeetext = $('.meetingattendeesdata').text();
  meetingatttendeetext = meetingatttendeetext.replace(/,/g, '<br>');
  $('.meetingattendeesdata').html(meetingatttendeetext);

  $('#show-add-more-fields').hide();
  $('#toggle-add').click(function(){
    $('#show-add-more-fields').show();
    $('#toggle-add').hide();
  });


  $('#addinviteeaction').click(function(){
    var invname = $('input[name=invitee--name]').val();
    var invrole = $('input[name=invitee--role]').val();
    $('.govuk-checkboxes--small').append('<div class="govuk-checkboxes__item"><input class="govuk-checkboxes__input" id="organisation" name="invitess-attended" type="checkbox" value="'+ invname + ' - '+invrole +'"><label class="govuk-label govuk-checkboxes__label" for="organisation"><strong>'+ invname +'</strong> - '+ invrole +'</label> </div>');
    //$('#invitee-list').append('<li class="invitee govuk-body">'+invname +' - '+ invrole+'</li>');
    $('#invitee-list').append('<div class="govuk-summary-list__row"><dd class="govuk-summary-list__value">'+ invname + '</dd><dd class="govuk-summary-list__value">'+invrole +'</dd><dd class="govuk-summary-list__value"><div class="govuk-radios__item govuk-radios--small"><input class="govuk-radios__input" id="changedName-2" name="meeting-chair" type="radio" value="'+ invname + '"><label class="govuk-label govuk-radios__label" for="changedName-2"></label></div> </dd></div>');
    var textval = $('#hideinvitees').val();
    $('#hideinvitees').val(textval + invname +' - '+ invrole+',');
    $('input[name=invitee--name]').val('');
    $('input[name=invitee--role]').val('');
  });

  $('#dashboard-2').closest('main').parent('.govuk-width-container').addClass('newdashboard');
  $('#dashboard-2').closest('body').find('header').addClass('newdashboard-header');
  $('#dashboard-2').closest('body').addClass('dashstyle');

  //search moj timeline
  $("#searchtimeline").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".moj-timeline__item h2").filter(function() {
      $(this).parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  //tabs 
  $('.sidetabcontent').hide();
  $('.sidetabcontent.activetab').show();

  $('#tab_personal').click(function(){
    $('#tabcontent1').show();
    $('#tab1').addClass('activetab');
  });
  $('#tab_cpsdetails').click(function(){
    $('.sidetabcontent').hide();
    $('#tabcontent3').show();
    $('#tab3').addClass('activetab');
  });
  $('#tab_offence-trial-charge').click(function(){
    $('.sidetabcontent').hide();
    $('#tabcontent21').show();
    $('#tab21').addClass('activetab');
  });

  
  $('.sidetab').click(function(){
    var selectedTab = $(this).attr('id');
    if(selectedTab == 'tab1'){
      $('.sidetabcontent').hide()
      $('.sidetab').removeClass('activetab');
      $(this).addClass('activetab');
      $('#tabcontent1').show().addClass('activetab');
    }
    if(selectedTab == 'tab2'){
      $('.sidetabcontent').hide();
      $('.sidetab').removeClass('activetab');
      $(this).addClass('activetab');
      $('#tabcontent2').show().addClass('activetab');
    }
    if(selectedTab == 'tab3'){
      $('.sidetabcontent').hide();
      $('.sidetab').removeClass('activetab');
      $(this).addClass('activetab');
      $('#tabcontent3').show().addClass('activetab');
    }
    if(selectedTab == 'tab4'){
      $('.sidetabcontent').hide();
      $('.sidetab').removeClass('activetab');
      $(this).addClass('activetab');
      $('#tabcontent4').show().addClass('activetab');
    }
    if(selectedTab == 'tab5'){
      $('.sidetabcontent').hide();
      $('.sidetab').removeClass('activetab');
      $(this).addClass('activetab');
      $('#tabcontent5').show().addClass('activetab');
    }
    if(selectedTab == 'tab9'){
      $('.sidetabcontent').hide()
      $('.sidetab').removeClass('activetab');
      $(this).addClass('activetab');
      $('#tabcontent9').show().addClass('activetab');
    }
    if(selectedTab == 'tab10'){
      $('.sidetabcontent').hide()
      $('.sidetab').removeClass('activetab');
      $(this).addClass('activetab');
      $('#tabcontent10').show().addClass('activetab');
    }
    if(selectedTab == 'tab21'){
      $('.sidetabcontent').hide()
      $('.sidetab').removeClass('activetab');
      $(this).addClass('activetab');
      $('#tabcontent21').show().addClass('activetab');
    }
    if(selectedTab == 'tab22'){
      $('.sidetabcontent').hide()
      $('.sidetab').removeClass('activetab');
      $(this).addClass('activetab');
      $('#tabcontent22').show().addClass('activetab');
    }
  });



  //CONDITIONS

  //defaults
  $('.button-set, #contacts .govuk-notification-banner').hide();

  //ACCEPTED
  $('#victimresp-yes, #victimresp-yes-2').click(function(){
    localStorage.setItem("victimresponse", "accepted");  
    $('#contacts .govuk-notification-banner__heading').text('Victim response updated');
    $('.moj-ticket-panel, .loop, .no-response, #victimresp-no-2').hide();
    $('.button-set, .acceptedmeeting, #contacts .govuk-notification-banner, .loop2').show();

    localStorage.setItem('dtmstatus','loop1');
    $('.legacy-loop').hide(); 
    $('.legacy-loop-1, .legacy-heading').show(); 
    $('#victimresp-yes, #victimresp-yes-2').hide();
  });

  //DECLINED
  $('#victimresp-no, #victimresp-no-2').click(function(){
    localStorage.setItem("victimresponse", "declined");  
    $('#contacts .govuk-notification-banner__heading').text('Victim response updated');
    $('.moj-ticket-panel, .loop, .acceptedmeeting, #acceptedmeeting, #victimresp-no-2').hide();
    $('.acceptedmeeting, .add-meeting-notes-button').hide();
    $('.start-cat1, .button-set, #contacts .govuk-notification-banner, .loop2, .legacy-heading').show();

    localStorage.setItem('dtmstatus','loop1');
    $('.legacy-loop').hide(); 
    $('.legacy-loop-1, .legacy-heading, .button-set').show(); 
  });
  
  $('#victimresp-no-response').click(function(){
    localStorage.setItem("victimresponse", "no-response");  
    //no response
    $('#contacts .govuk-notification-banner__heading').text('Awaiting victim response');
    $('.moj-ticket-panel, .loop, .acceptedmeeting, .add-meeting-notes-button').hide();
    $('.button-set, #contacts .govuk-notification-banner, .loop2, .no-response, #acceptedmeeting').show();
    
    localStorage.setItem('dtmstatus','loop1');
    $('.legacy-loop').hide(); 
    $('.legacy-loop-1, .legacy-heading').show(); 
  });

  $('#contacts').each(function(){
    var responsestatus = localStorage.getItem('victimresponse');
    
    if(responsestatus == 'declined') {
      $('.acceptedmeeting, .no-response').hide();
      console.log('decline');
    }
    if(responsestatus == 'accepted') {
      $('.declinemeeting, .no-response').hide();
      console.log('accept');
    }
    if(responsestatus == 'no-response') {
      $('.acceptedmeeting, .declinemeeting').hide();
      $('.no-response, .no-response').show();
      console.log('no-response');
    }
    if(responsestatus == '') {
      $('.acceptedmeeting, .declinemeeting').hide();
    }

    //toggle legacy data
    localStorage.setItem('dtmstatus','');

    var loopestatus = localStorage.getItem('dtmstatus');
    if(loopestatus == 'loop1') {
      console.log('Loop 1');
      $('.legacy-loop').hide(); 
      $('.legacy-loop-1').show(); 
    }
    if(loopestatus == 'loop2') {
      console.log('Loop 2');
      $('.legacy-loop').hide(); 
      $('.legacy-loop-1, .legacy-loop-2').show(); 
    }
    if(loopestatus == 'loop3') {
      console.log('Loop 3');
      $('.legacy-loop').hide(); 
      $('.legacy-loop-1, .legacy-loop-2, .legacy-loop-3').show(); 
    }
    if(loopestatus == 'loop4') {
      console.log('Loop 4');
      $('.legacy-loop').hide(); 
      $('.legacy-loop-1, .legacy-loop-2, .legacy-loop-3').show();
    }
  });

  $('input[name=victimresponse]').change(function(){
    var victimresponse = $(this).val();
    if (victimresponse == 'Accepted'){
      $('form').attr('action','../witness#contacts');
      localStorage.setItem("victimresponse", "accepted");
    }
    if (victimresponse == 'Declined'){
      $('form').attr('action','p3-date-declined');
      localStorage.setItem("victimresponse", "declined");
    }
    if (victimresponse == 'No response'){
      $('form').attr('action','p1-record-no-response');
      localStorage.setItem("victimresponse", "no-response");
    }
  });

  //not eligible
  $('input[name=eligible]').change(function(){
    var victimresponse = $(this).val();
    if (victimresponse == 'no'){
      $('form').attr('action','p2-eligible-no')
    }
  });

  $('input[name=accpteddecline]').change(function(){
    var victimresponse = $(this).val();
    if (victimresponse == 'no'){
      $('form').attr('action','victimdeclined')
    }
  });
  $('input[name=eligibletomeet]').change(function(){
    var eligibletomeet = $(this).val();
    if (eligibletomeet == 'no'){
      $('form').attr('action','noteligiabletomeet')
    }
  });

  $('input[name=didimeetinghappen]').change(function(){
    var eligibletomeet = $(this).val();
    //alert(eligibletomeet);
    if (eligibletomeet == 'No'){
      $('form').attr('action','../meeting-not-conducted')
    }
  });

  $('select#preferredcontact').change(function(){
    var preferredcontact = $(this).find("option:selected").val();
    alert(preferredcontact);
    if (preferredcontact == 'Letter'){
      $('form').attr('action','p4-victim-response')
    }
    if (preferredcontact == 'Email'){
      $('form').attr('action','p4-victim-response')
    }
  });

  
$('#closemnotification').click(function(){
  $('.govuk-notification-banner').hide();
});
 //contact not set
 $('.contact-set').hide();
 $('.charge-decision-set').hide();
 //contact set
 //charging decision made
  
  //LOOP2 - victim response
  var referrer =  document.referrer;
  if (referrer.indexOf("p1-what-was-the-victim-response") > -1) { 
    //accepted offer
    $('#contacts .govuk-notification-banner__heading').text('Victim response updated');
    $('.moj-ticket-panel, .loop, #victimresp-yes, #victimresp-no-2').hide();
    $('.button-set, .acceptedmeeting, #contacts .govuk-notification-banner, .loop2').show();

    localStorage.setItem('dtmstatus','loop1');
    $('.legacy-loop').hide(); 
    $('.legacy-loop-1, .legacy-heading').show(); 
  } 

  $('#shownewrole').click(function(){
    $('#add-role').show();
  });

  $('#recordanotherattempt-2').click(function(){
    localStorage.setItem('victimcontactattempts','1');
  });

  //no response
  $('.attempt-3').hide();
  $('#dashboard').each(function(){
    localStorage.setItem('victimcontactattempts','0');
  });

  var checkattempts = localStorage.getItem('victimcontactattempts');

  if (checkattempts == 3) {
    $('.numberofattempts').text('3 attempts');
    $('.govuk-notification-banner__heading').text('Victim has been contacted 3 times with no response');
    $('#recordanotherattempt, #recordanotherattempt-2').hide();
    $('.attempt-3, #accepted-but-cancel-meeting, #cancel-meeting-btn').show();
    //alert('attempt 3');
    $('#recordanotherattempt').hide();
  }

  if (checkattempts == 2) {
    $('.numberofattempts').text('2 attempts');
    $('#recordanotherattempt-2').click(function(){
      localStorage.setItem('victimcontactattempts','3');
      $('#sla-window').text('1 July 2024');
    });
  }
  if (checkattempts == 1) {
    $('.numberofattempts').text('1 attempt');
    $('#recordanotherattempt-2').click(function(){
      localStorage.setItem('victimcontactattempts','2');
       $('#sla-window').text('21 June 2024');
    });
  } 
  if (checkattempts == 0) {
    $('#recordanotherattempt-2').click(function(){
      localStorage.setItem('victimcontactattempts','1');
      $('#sla-window').text('1 June 2024');
    });
  }
  //count number of attempts to contact victim

  if (referrer.indexOf("p1-record-no-response") > -1) { 
   //no response
    $('#contacts .govuk-notification-banner__heading').text('Awaiting victim response');
    $('.moj-ticket-panel, .loop, .acceptedmeeting, .add-meeting-notes-button, #accepted-but-cancel-meeting').hide();
    $('.button-set, #contacts .govuk-notification-banner, .loop2').show();
    
    localStorage.setItem('dtmstatus','loop1');
    $('.legacy-loop').hide(); 
    $('.legacy-loop-1, .legacy-heading').show(); 
  } 

  if (referrer.indexOf('p4-reason-declined') > -1) {
    $('#contacts .govuk-notification-banner__heading').text('Victim response updated');
    $('.moj-ticket-panel, .loop, .acceptedmeeting, #acceptedmeeting, #accepted-but-cancel-meeting').hide();
    $('.acceptedmeeting, .add-meeting-notes-button, #victimresp-no-2').hide();
    $('.start-cat1, .button-set, #contacts .govuk-notification-banner, .loop2, .legacy-heading').show();

    localStorage.setItem('dtmstatus','loop1');
    $('.legacy-loop').hide(); 
    $('.legacy-loop-1, .legacy-heading, .button-set').show(); 
  }
 
  if (window.location.href.indexOf("contacts?meetinghappens") > -1) {
   //alert("your url contains the name franky");
  }

  //loop1
  if (referrer.indexOf('category1/p5-upload-dtm') > -1) {
    $('#contacts .govuk-notification-banner__heading').text('Duty to meet created');
    $('.loop, .moj-ticket-panel.meeting-not-set').hide();
    $('.loop1, .govuk-notification-banner, .button-set').show();
    localStorage.setItem('dtmstatus','loop1');

    $('.legacy-loop').hide(); 
    //$('.legacy-loop-1').show(); 
  }

  //add-another-victim-contact
  //loop 3
  if (referrer.indexOf("p4-special-measures") > -1) { 
    $('#contacts .govuk-notification-banner__heading').text('Duty to meet created');
    $('.loop, .moj-ticket-panel.meeting-not-set').hide();
    $('.loop3, .govuk-notification-banner, .legacy-heading, .button-set').show();
    localStorage.setItem('dtmstatus','loop3');

    $('.legacy-loop').hide(); 
    $('.legacy-loop-1, .legacy-loop-2').show(); 
  }

  $('.contact-button-show, .meeting-set-up, .meetingnotesuploaded').hide();
  // LOOP 3 meeting setup
  var referrer =  document.referrer;
  if (referrer.indexOf("p3-adjusments") > -1) { 
    $('.contact-button-show, .meeting-set-up').show();
    $('.contact-set, .legacy-heading, .button-set').show();
    $('.moj-ticket-panel, #addvictkimcontact, .meetingnotesuploaded').hide();

    $('.legacy-loop').hide(); 
    $('.legacy-loop-1, .legacy-loop-2').show(); 

  } 

  //LOOP 4 meeting outcomes added
  if (referrer.indexOf("p-5-upload-notes") > -1) { 
    $('.loop').hide();
    $('.contact-set, .legacy-heading, .button-set').show();
    $('.moj-ticket-panel, #addvictkimcontact').hide();
    $('.govuk-notification-banner__heading').text('Meeting notes added');
    $('.loop4').show();
    localStorage.setItem('dtmstatus','loop4');

    $('.legacy-loop').hide(); 
    $('.legacy-loop-1, .legacy-loop-2, .legacy-loop-3').show(); 
  } 

  $('#add-attendee').click(function(e){
    e.preventDefault();
    var name = $('input[name=attendee-name]').val();
    var role = $('input[name=attendee-role]').val();
    var phone = $('input[name=attendee-phone]').val();
    var email = $('input[name=attendee-email]').val();
    var address = $('input[name=attendee-address]').val();

    $('#attendeeslist').append('<p class="gvuk-body">'+name +'<br>'+ role +'<br>'+ phone +'<br>'+ email +'<br>'+ address+'</p>')
  });

  $( function() {
    var availableTags = [
      "Shrewsbury Police Station ",
      "Telford Police Station ",
      "Welshpool Police Station ",
      "Clunbury Police Station ",
      "Bishops Castle Police Station ",
      "Clun Police Station ",
      "Ludlow Police Station ",
      "Craven Arms Police Station ",
      "Lydbury North Police Station ",
      "Lydham Police Station ",
      "Norbury Police Station ",
      "Linley Police Station ",
      "Albury Police Station ",
      "Berington Police Station ",
      "Dudley Police Station ",
      "Eldridge Police Station ",
      "Great Billsbury Police Station ",
      "Hereford Police Station ",
      "Ingram Police Station ",
      "Kelso Police Station ",
      "Leighon Police Station ",
      "Muntsford Police Station ",
    ];
    $( "#stations" ).autocomplete({
      source: availableTags
    });
  } );


   $('hidedata').show();
   $('.showedit').hide(); 
   $('.showreasonforreject').hide();

   //edit contact witness data
   $('#contwithvict').click(function(e){
      e.preventDefault();
      $('.showedit').show();
      $('.hidedata').hide();
      $('.editbutton').addClass('editmorebar');
      var distance = $('.editbutton').offset().top,
      $window = $(window);
  
      $window.scroll(function() {
          if ( $window.scrollTop() >= distance ) {
            $('.editbutton').addClass("sticky");  
          } else {  
            $('.editbutton').removeClass("sticky");  
          }  
      });
   });
   $('#savecontwithvict').click(function(e){
    e.preventDefault();
    $('.showedit, .showreasonforreject').hide();
    $('.hidedata').show();
    $('.editbutton').removeClass('editmorebar');
    $('.editbutton').removeClass("sticky");  
   // $('#contwithvict, .editbutton').css('position','inherit')
   });
   

   $('#acceptreject').change(function(){
    var rej = $(this).val();
    if (rej == 'rejected'){
      $('.showreasonforreject').show();
    } else {
      $('.showreasonforreject').hide();
    }
   });

    $('#wittnesstable .govuk-table__row').each(function(){
        var caseID = $(this).find('td:nth-child(4)').text();
        var fullName = $(this).find('td:nth-child(1)').text();
        var caseurn = $(this).find('td:nth-child(2)').text();

        console.log(caseID, fullName);

        $(this).find('a').attr('href','witness?caseid='+ caseID +'&name='+fullName + '&caseurn='+caseurn);
       
    });


    var getUrlParameter = function getUrlParameter(sParam) {
      var sPageURL = window.location.search.substring(1),
          sURLVariables = sPageURL.split('&'),
          sParameterName,
          i;
  
      for (i = 0; i < sURLVariables.length; i++) {
          sParameterName = sURLVariables[i].split('=');
  
          if (sParameterName[0] === sParam) {
              return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
          }
      }
      return false;
    };
    var caseid = getUrlParameter('caseid');
    var name = getUrlParameter('name');
    var caseurn = getUrlParameter('caseurn');
    var action = getUrlParameter('action');
    
    if (action === 'casedropped'){
      $('#alertbox').show();
    }
    if (action === 'vrr'){
      $('.vrrframe').show();
    }
   
    
    $('#wittness .victimname').text(name);
    $('#wittness #victimid').text(caseid);
    $('#wittness #caseurn').text(caseurn);
    
    $('#importdatatable, #importsuccess').hide();
    
    $('#searchfordata').click(function(e){
      e.preventDefault();
      $('form').hide();
      $(window).scrollTop(0);
      $('#importdatatable').show();
    });

    $('#importdatatable').click(function(e){
      e.preventDefault();
      //$('form').hide();
    });
    $('.importdata').click(function(e){
      e.preventDefault();
      $('#importdatatable, form').hide();
      $('#importsuccess').show();   
    });


    $('#importdatatable').click(function(e){
      e.preventDefault();
      //$('#backtosearch').hide();
    });
    $('#backtosearch').click(function(e){
      e.preventDefault();
      $('form').show();
      $('#importsuccess').hide();   
    });
    

  
});