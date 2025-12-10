import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: " - Heath Primary School",
};

export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: `<script src="/assets/js/tinymce.min.js"></script>

<script src="/assets/js/tinymcefunctions.js"></script>

<div id="access">
  <ul>
    <li><a href="#content01">Skip to content</a></li>
    <li><a href="#primary-menu">Skip to navigation</a></li>
    <li><a href="#footer">Skip to footer</a></li>
  </ul>
</div>

<div id="wrapper" class="clearfix">

	




<header id="header" class="transparent-header semi-transparent full-header">

	<div id="header-wrap" class="">

		<div class="container clearfix">

			<div id="primary-menu-trigger"><i class="icon-reorder"></i></div>

			
			<div id="logo">

				<a href="/" class="standard-logo" data-dark-logo="/images/large-logo.png"><img src="/images/large-logo.png" alt="Heath Primary School"></a>
				
			</div>
			
			
			
			<nav id="primary-menu" class="style-5 ">
	

	<ul class="count7 sf-js-enabled" style="touch-action: pan-y;">
			<li>
			 <a href="/" title="Home">
			 	<div class="stickyHidden"><i class="fa fa-home"></i><span>Home</span></div>
			 	</a>
			 				 	
			 
		</li>
			<li class="sub-menu">
			 <a href="javascript:;" title="Key Information" class="sf-with-ul">
			 	<div class="stickyHidden"><i class="fa fa-folder"></i><span>Key Information</span></div>
			 	</a>
			 						<ul style="display: none;" class="nav-submenu">
																																		<li>
									
									<a href="/attendance-and-admissions-copy" title="Admissions">
										<div>
											Admissions
																					</div>
									</a>
																	</li>
																												<li>
									
									<a href="/attendance" title="Attendance">
										<div>
											Attendance
																					</div>
									</a>
																	</li>
																												<li>
									
									<a href="/embark" title="Embark Federation MAT">
										<div>
											Embark Federation MAT
																					</div>
									</a>
																	</li>
																												<li>
									
									<a href="/equality-and-diversity" title="Diversity, Equity and Inclusion">
										<div>
											Diversity, Equity and Inclusion
																					</div>
									</a>
																	</li>
																												<li>
									
									<a href="/GDPR" title="GDPR">
										<div>
											GDPR
																					</div>
									</a>
																	</li>
																												<li class="sub-menu">
									
									<a href="/governors" title="Governors" class="sf-with-ul">
										<div>
											Governors
																					</div>
									</a>
																			<ul style="display: none;" class="nav-submenu">
																							<li><a href="https://heathprimary.plus.co.uk/governors/governors-secure-area" title="Governors Secure Link"><div>Governors Secure Link</div></a></li>
																					</ul>
																	</li>
																												<li>
									
									<a href="/nursery-admissions" title="Nursery Admissions">
										<div>
											Nursery Admissions
																					</div>
									</a>
																	</li>
																												<li>
									
									<a href="/ofsted-performance-tables" title="Ofsted/Performance Tables">
										<div>
											Ofsted/Performance Tables
																					</div>
									</a>
																	</li>
																																									<li>
									
									<a href="/policies-copy" title="Policies ">
										<div>
											Policies 
																					</div>
									</a>
																	</li>
																												<li>
									
									<a href="/pupil-premium-and-sports-premium" title="Pupil Premium and Sports Premium">
										<div>
											Pupil Premium and Sports Premium
																					</div>
									</a>
																	</li>
																												<li>
									
									<a href="/school-meals" title="School Meals">
										<div>
											School Meals
																					</div>
									</a>
																	</li>
																												<li>
									
									<a href="/SEND/Inclusion" title="SEND/Inclusion">
										<div>
											SEND/Inclusion
																					</div>
									</a>
																	</li>
																												<li>
									
									<a href="/travel-" title="Travel ">
										<div>
											Travel 
																					</div>
									</a>
																	</li>
																												<li>
									
									<a href="/uniform-shop" title="Uniform ">
										<div>
											Uniform 
																					</div>
									</a>
																	</li>
																		</ul>
						 	
			 
		</li>
			<li class="sub-menu">
			 <a href="javascript:;" title="Safeguarding" class="sf-with-ul">
			 	<div class="stickyHidden"><i class="fa fa-clipboard"></i><span>Safeguarding</span></div>
			 	</a>
			 						<ul style="display: none;" class="nav-submenu">
																					<li class="sub-menu">
									
									<a href="/school-policies" title="Safeguarding (Including Policies)" class="sf-with-ul">
										<div>
											Safeguarding (Including Policies)
																					</div>
									</a>
																			<ul style="display: none;" class="nav-submenu">
																							<li><a href="/school-policies/child-friendly-safeguarding-policies-" title="Child Friendly Safeguarding Policies "><div>Child Friendly Safeguarding Policies </div></a></li>
																					</ul>
																	</li>
																												<li>
									
									<a href="/protected-characteristics" title="Protected Characteristics">
										<div>
											Protected Characteristics
																					</div>
									</a>
																	</li>
																												<li>
									
									<a href="/prevent" title="Prevent">
										<div>
											Prevent
																					</div>
									</a>
																	</li>
																												<li>
									
									<a href="/online-safety" title="Online Safety">
										<div>
											Online Safety
																					</div>
									</a>
																	</li>
																												<li>
									
									<a href="/parental-guidance" title="Useful Links &amp; Parental Guidance">
										<div>
											Useful Links &amp; Parental Guidance
																					</div>
									</a>
																	</li>
																		</ul>
						 	
			 
		</li>
			<li class="sub-menu">
			 <a href="javascript:;" title="Parent Area" class="sf-with-ul">
			 	<div class="stickyHidden"><i class="fa fa-group"></i><span>Parent Area</span></div>
			 	</a>
			 						<ul style="display: none;" class="nav-submenu">
																					<li>
									
									<a href="/clubs" title="Clubs">
										<div>
											Clubs
																					</div>
									</a>
																	</li>
																												<li>
									
									<a href="/parent-area/home-learning/-embark-award" title=" Embark Award">
										<div>
											 Embark Award
																					</div>
									</a>
																	</li>
																												<li>
									
									<a href="/events-and-celebrations" title="Events and Celebrations">
										<div>
											Events and Celebrations
																					</div>
									</a>
																	</li>
																												<li>
									
									<a href="/parent-area/newsletters" title="Newsletters">
										<div>
											Newsletters
																					</div>
									</a>
																	</li>
																												<li>
									
									<a href="/parent-view-and-surveys" title="Parent View and Surveys">
										<div>
											Parent View and Surveys
																					</div>
									</a>
																	</li>
																												<li>
									
									<a href="/pupil-voice" title="Pupil Voice">
										<div>
											Pupil Voice
																					</div>
									</a>
																	</li>
																												<li class="sub-menu">
									
									<a href="/parent-area/remote-learning" title="Remote Learning" class="sf-with-ul">
										<div>
											Remote Learning
																					</div>
									</a>
																			<ul style="display: none;" class="nav-submenu">
																							<li><a href="/parent-area/home-learning/lower-key-stage-2-home-learning" title="Lower Key Stage 2 Home Learning"><div>Lower Key Stage 2 Home Learning</div></a></li>
																							<li><a href="/parent-area/home-learning/upper-key-stage-2-home-learning" title="Upper Key Stage 2 Home Learning"><div>Upper Key Stage 2 Home Learning</div></a></li>
																							<li><a href="/parent-area/home-learning/key-stage-1-home-learning" title="Key Stage 1 Remote Learning"><div>Key Stage 1 Remote Learning</div></a></li>
																							<li><a href="/parent-area/home-learning/EYFS-home-learning" title="EYFS Home Learning"><div>EYFS Home Learning</div></a></li>
																					</ul>
																	</li>
																												<li>
									
									<a href="/Term-dates" title="Term Dates">
										<div>
											Term Dates
																					</div>
									</a>
																	</li>
																												<li>
									
									<a href="/safeguarding-newsletters-" title="Safeguarding Newsletters ">
										<div>
											Safeguarding Newsletters 
																					</div>
									</a>
																	</li>
																		</ul>
						 	
			 
		</li>
			<li class="sub-menu">
			 <a href="/curriculum" title="Curriculum" class="sf-with-ul">
			 	<div class="stickyHidden"><i class="fa fa-book"></i><span>Curriculum</span></div>
			 	</a>
			 						<ul style="display: none;" class="nav-submenu">
																					<li>
									
									<a href="/curriculum/teaching-learning-" title="Teaching &amp; Learning ">
										<div>
											Teaching &amp; Learning 
																					</div>
									</a>
																	</li>
																												<li>
									
									<a href="/curriculum/english" title="English">
										<div>
											English
																					</div>
									</a>
																	</li>
																												<li>
									
									<a href="/curriculum/maths" title="Maths">
										<div>
											Maths
																					</div>
									</a>
																	</li>
																												<li>
									
									<a href="/curriculum">
										<div>
											Curriculum 
																					</div>
									</a>
																	</li>
																												<li>
									
									<a href="/curriculum/assemblies" title="Assemblies" target="_blank">
										<div>
											Assemblies
																					</div>
									</a>
																	</li>
																												<li>
									
									<a href="/curriculum/nurture-at-heath" title="Nurture ">
										<div>
											Nurture 
																					</div>
									</a>
																	</li>
																												<li>
									
									<a href="/curriculum/eyfs" title="EYFS">
										<div>
											EYFS
																					</div>
									</a>
																	</li>
																												<li>
									
									<a href="/curriculum/history" title="History">
										<div>
											History
																					</div>
									</a>
																	</li>
																												<li>
									
									<a href="/curriculum/geography-" title="Geography ">
										<div>
											Geography 
																					</div>
									</a>
																	</li>
																												<li>
									
									<a href="/curriculum/science" title="Science">
										<div>
											Science
																					</div>
									</a>
																	</li>
																												<li>
									
									<a href="/curriculum/art-&amp;Design" title="Art &amp; Design ">
										<div>
											Art &amp; Design 
																					</div>
									</a>
																	</li>
																												<li>
									
									<a href="/pe" title="PE ">
										<div>
											PE 
																					</div>
									</a>
																	</li>
																												<li>
									
									<a href="/curriculum/forest-school" title="Explorers">
										<div>
											Explorers
																					</div>
									</a>
																	</li>
																												<li>
									
									<a href="/curriculum/opal" title="OPAL">
										<div>
											OPAL
																					</div>
									</a>
																	</li>
																		</ul>
						 	
			 
		</li>
			<li class="sub-menu">
			 <a href="javascript:;" title="School Community" class="sf-with-ul">
			 	<div class="stickyHidden"><i class="fa fa-child"></i><span>School Community</span></div>
			 	</a>
			 						<ul style="display: none;" class="nav-submenu">
																																		<li>
									
									<a href="/EmotionalHealthandWellbeing" title="Emotional Health and Wellbeing">
										<div>
											Emotional Health and Wellbeing
																					</div>
									</a>
																	</li>
																												<li>
									
									<a href="/after-and-before-school-club" title=" Before and After School Club">
										<div>
											 Before and After School Club
																					</div>
									</a>
																	</li>
																																									<li>
									
									<a href="http://www.letslocalise.co.uk/school/heath-primary-school/sch128250/campaigns/" title="Lets Localise " target="_blank">
										<div>
											Lets Localise 
																					</div>
									</a>
																	</li>
																												<li>
									
									<a href="/schoolcommunity/local-clubs" title="Local Clubs" target="_blank">
										<div>
											Local Clubs
																					</div>
									</a>
																	</li>
																												<li>
									
									<a href="/behaviour-and-rewards" title="Behaviour and Rewards">
										<div>
											Behaviour and Rewards
																					</div>
									</a>
																	</li>
																												<li>
									
									<a href="/friends-of-school" title="Friends of School">
										<div>
											Friends of School
																					</div>
									</a>
																	</li>
																												<li>
									
									<a href="/family-liaison-worker" title="Family Liaison Worker">
										<div>
											Family Liaison Worker
																					</div>
									</a>
																	</li>
																												<li>
									
									<a href="/schoolcommunity/early-help-offer" title="Early Help Offer " target="_blank">
										<div>
											Early Help Offer 
																					</div>
									</a>
																	</li>
																												<li>
									
									<a href="/meet-our-staff" title="Meet our staff ">
										<div>
											Meet our staff 
																					</div>
									</a>
																	</li>
																		</ul>
						 	
			 
		</li>
			<li>
			 <a href="/contact" title="Contact Us">
			 	<div class="stickyHidden"><i class="fa fa-comments"></i><span>Contact Us</span></div>
			 	</a>
			 				 	
			 
		</li>
	
		

		</ul>
		
	<div id="top-search">
	<a id="top-search-trigger" tabindex="0" role="search"><span>Site Search</span><i class="icon-search3"></i><i class="icon-line-cross"></i></a>
	<form action="/site-search" method="get" name="search-form" id="search-form">
		<a tabindex="0" id="searchTrap" role="presentation"><span>Function to remove keyboard trap from search</span></a>
		<label for="Search" style="position: absolute !important; left: -9999px !important;">Search</label>
		<input type="text" id="Search" name="s" class="form-control" value="" placeholder="Type &amp; Hit Enter..">
		<button type="submit">Search</button>
	</form>
</div>	
	</nav>
			

		</div>

	</div>
	</header>
	



						<section id="slider" class="slider-element swiper_wrapper full-width clearfix" data-autoplay="7000" data-speed="650" data-loop="true">
		<div class="swiper-container swiper-parent swiper-container-horizontal" style="cursor: grab;">
			<div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(-800px, 0px, 0px);"><div class="swiper-slide swiper-slide-duplicate swiper-slide-prev" style="background-image: url(&quot;/heath/s5.jpg&quot;); width: 800px;" data-swiper-slide-index="4">
							<div class="container clearfix">
															</div>
						</div>
	
	
	
							       
	    	 		    		    					        			    	    		    
	    	    	    	    	    	    	    
	    	
	    		    
	    	    						    	
													<div class="swiper-slide dark swiper-slide-active" style="background-image: url(&quot;/heath/s1.jpg&quot;); width: 800px;" data-swiper-slide-index="0">
							<div class="container clearfix">
																<div class="slider-caption slider-caption-center" style="top: 140px;">
																		<h2 data-caption-animate="fadeInUp" class="fadeInUp animated">Welcome to Heath Primary School</h2>
																																			</div>
															</div>
						</div>
										
								       
	    	 		    		    					        			    	    		    
	    	    	    	    	    	    	    
	    	    		    
	    	    						    	
													<div class="swiper-slide swiper-slide-next" style="background-image: url(&quot;/heath/s2.jpg&quot;); width: 800px;" data-swiper-slide-index="1">
							<div class="container clearfix">
															</div>
						</div>
										
								       
	    	 		    		    					        			    	    		    
	    	    	    	    	    	    	    
	    	    		    
	    	    						    	
													<div class="swiper-slide" style="background-image: url(&quot;/heath/s3.jpg&quot;); width: 800px;" data-swiper-slide-index="2">
							<div class="container clearfix">
															</div>
						</div>
										
								       
	    	 		    		    					        			    	    		    
	    	    	    	    	    	    	    
	    	    		    
	    	    						    	
													<div class="swiper-slide" style="background-image: url(&quot;/heath/s4.jpg&quot;); width: 800px;" data-swiper-slide-index="3">
							<div class="container clearfix">
															</div>
						</div>
										
								       
	    	 		    		    					        			    	    		    
	    	    	    	    	    	    	    
	    	    		    
	    	    						    	
													<div class="swiper-slide swiper-slide-duplicate-prev" style="background-image: url(&quot;/heath/s5.jpg&quot;); width: 800px;" data-swiper-slide-index="4">
							<div class="container clearfix">
															</div>
						</div>
										
					<div class="swiper-slide dark swiper-slide-duplicate swiper-slide-duplicate-active" style="background-image: url(&quot;/heath/s1.jpg&quot;); width: 800px;" data-swiper-slide-index="0">
							<div class="container clearfix">
																<div class="slider-caption slider-caption-center" style="top: 140px;">
																		<h2 data-caption-animate="fadeInUp" class="not-animated">Welcome to Heath Primary School</h2>
																																			</div>
															</div>
						</div></div>
			<div class="slider-arrow-left" tabindex="0" role="button" aria-label="Previous slide"><i class="icon-angle-left"></i></div>
			<div class="slider-arrow-right" tabindex="0" role="button" aria-label="Next slide"><i class="icon-angle-right"></i></div>
						<div class="slide-number"><div class="slide-number-current">1</div><span>/</span><div class="slide-number-total">5</div></div>
			<div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"><span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 1"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 2"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 3"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 4"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 5"></span></div>
		<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>

</section>			

<section id="content01" name="content01" class="">

	




<div class="content-wrap">
			<script type="text/javascript">
    if(window.location.pathname=='' || window.location.pathname=='/') {
        window.location = '/latest';
    }
</script>

<div id="pageNotFound" class="container content-wrap">
    <div id="errholder" class="page_not_found_wrap">
        <div class="errimage"></div>
        <div class="errmessage">
          <div class="heading-block">
              <h1>Page not found!</h1>
              <span>Something seems to have gone wrong.</span>
            </div>
    
            <p>Sorry, the page you are trying to view does not exist or is missing. <br>If this problem persists complete the form below. We will resolve the issue right away.</p>
        </div>
    </div>
</div>


    <script type="text/javascript">
    function LoteCfForm() {

    }

    LoteCfForm.prototype.getCfValues = function (formData, cfArrayName) {
        const promises = $(".custom_field_edit").map(function (i, e) {
            if (LoteCfForm.prototype.isInVisibleGroup(e)) {
                var f = $(e).data('function');
                if (f && typeof LoteCfForm.prototype[f] == 'function') {
                    return LoteCfForm.prototype[f](formData, e, cfArrayName);
                }
            }
        });

        return Promise.all(promises);
    };

    LoteCfForm.prototype.isInVisibleGroup = function (e) {
        return ! $(".custom_group_edit[data-value='" + $(e).data('group') + "']").hasClass("group_disabled");;
    };

    LoteCfForm.prototype.getTextValue = function (formData, e, cfArrayName) {
        formData[cfArrayName][$(e).attr("data-id")] = $(e).val();
    };

    LoteCfForm.prototype.getWysiwygValue = function (formData, e, cfArrayName) {
        formData[cfArrayName][$(e).attr("data-id")] = getWysiwygValue($(e).attr("id"));
    };

    LoteCfForm.prototype.getDateTimeValue = function (formData, e, cfArrayName) {
        var id = $(e).attr('id');
        var element = $('#' + id + '_time');
        var time = timepickiConvert(element);

        var value = null;
        var date = $('#' + id + '_date_alt').val();
        if (date && time) {
            value = date + ' ' + time;
        }
        else if (date) {
            value = date;
        }
        else if (time) {
            value = time;
        }
        formData[cfArrayName][$(e).attr("data-id")] = value;
    };

    LoteCfForm.prototype.getDateValue = function (formData, e, cfArrayName) {
        var id = $(e).attr('id');
        formData[cfArrayName][$(e).attr("data-id")] = $('#' + id + '_date_alt').val();
    };

    LoteCfForm.prototype.getTimeValue = function (formData, e, cfArrayName) {
        var id = $(e).attr('id');
        var element = $('#' + id + '_time');
        var time = timepickiConvert(element);

        formData[cfArrayName][$(e).attr("data-id")] = time;
    };

    LoteCfForm.prototype.getCheckboxValues = function (formData, e, cfArrayName) {
        var id = $(e).data('id');
        var counter = 0;
        var values = [];
        $(e.form).find('input[name="checkbox_' + id + '"]').each(function (i, el) {
            if ($(el).is(":checked")) {
                values[counter] = $(el).val();
                counter++;
            }
        });
        if (values.length === 0) {
            values = "";
        }
        formData[cfArrayName][$(e).attr("data-id")] = values;
    };

    LoteCfForm.prototype.getRadioValue = function (formData, e, cfArrayName) {
        var id = $(e).attr('id');
        var baseObj = [];
        $.each($(e).find('input[type="radio"]'), function (index, item) {
            var obj = {};
            if ($(item).is(':checked')) {
                obj['id'] = $(item).val();

                var itemValid = true;
                if ($(item).val() == 0 && $('#cf_field_edit_radio_' + $(e).data('id') + '_custom').is(':visible')) {
                    var customInput = $('#cf_field_edit_radio_' + $(e).data('id') + '_custom').val();
                    obj['value'] = customInput;
                    itemValid = customInput !== '';
                } else {
                    obj['value'] = $(item).data('value');
                }

                if (itemValid) {
                    baseObj.push(obj);
                }
            }
        });
        formData[cfArrayName][$(e).attr("data-id")] = '';
        if (baseObj.length > 0) {
            formData[cfArrayName][$(e).attr("data-id")] = JSON.stringify(baseObj);
        }
    };

    LoteCfForm.prototype.getMatrixValues = function (formData, e, cfArrayName) {
        if (typeof(formData[cfArrayName][$(e).attr("data-default")]) == 'undefined') {
            formData[cfArrayName][$(e).attr("data-default")] = {};
        }
        formData[cfArrayName][$(e).attr("data-default")][$(e).attr("data-id")] = $(e).val();
    };

    LoteCfForm.prototype.getRecaptchaValue = function (formData, e, cfArrayName) {
        formData[cfArrayName][$(e).attr("data-id")] = grecaptcha.getResponse();
    };

    LoteCfForm.prototype.getFileValues = function (formData, e, cfArrayName) {
        return new Promise((resolve, reject) => {
            var file = e.files[0];
            if (!file) {
                return resolve();
            }
            var r = new FileReader();

            r.onload = function(read) {
                var contents = read.target.result;
                var attr = $(e).attr("data-id")
                formData[cfArrayName][attr] = contents;
                resolve();
            }

            r.readAsDataURL(file)
        })
    };

    LoteCfForm.prototype.getCheckedValues = function (formData, e, cfArrayName) {
        var name = $(e).data('name');
        var counter = 0;
        var values = [];
        $(e).find('input[name="' + name + '"]').each(function (i, el) {
            if ($(el).is(":checked")) {
                values[counter] = $(this).val();
                counter++;
            }
        });
        formData[cfArrayName][$(e).attr("data-id")] = values;
    };

    LoteCfForm.prototype.getOptionValue = function (formData, e, cfArrayName) {
        var id = $(e).attr('id');
        var obj = {
            id: $(e).val()
        };

        if ($(e).val() == 0 && $('#' + id + '_custom').is(':visible')) {
            obj['value'] = $('#' + id + '_custom').val();
        } else if ($(e).val() !== '') {
            obj['value'] = $(e).find(':selected').data('value');
        }

        formData[cfArrayName][$(e).attr("data-id")] = '';
        if (obj.value !== undefined) {
            formData[cfArrayName][$(e).attr("data-id")] = JSON.stringify([obj]);
        }
    };

    LoteCfForm.prototype.getOptionMultiValue = function (formData, e, cfArrayName) {
        var id = $(e).attr('id');
        var baseObj = [];
        if ($(e).val() !== null) {
            $.each($(e).val(), function (index, itemId) {
                var obj = {
                    id: itemId,
                    value: ''
                };

                var itemValid = true;
                if (itemId == 0 && $('#' + id + "_custom").is(':visible')) {
                    var customInput = $('#' + id + "_custom").val();
                    obj['value'] = customInput;
                    itemValid = customInput !== '';
                } else {
                    obj['value'] = $('#' + id + '_option_' + itemId).data('value');
                }

                if (itemValid) {
                    baseObj.push(obj);
                }
            });
        }

        formData[cfArrayName][$(e).attr("data-id")] = '';
        if (baseObj.length > 0) {
            formData[cfArrayName][$(e).attr("data-id")] = JSON.stringify(baseObj);
        }
    };

    var customBaseObjectRemove = [];

    LoteCfForm.prototype.getMultiCheckboxValue = function (formData, e, cfArrayName) {
        var baseObj = [];
        $.each($(e).find('input[type="checkbox"]'), function (index, item) {
            var obj = {};
            if ($(item).is(':checked')) {
                obj['id'] = $(item).val();

                var itemValid = true;
                var cfField = $('#cf_field_edit_' + $(e).data('id') + '_custom');
                if ($(item).val() === 0 && cfField.is(':visible')) {
                    var customInput = cfField.val();
                    obj['value'] = customInput;
                    itemValid = customInput !== '';
                } else {
                    obj['value'] = $(item).data('value');
                }

                if (itemValid) {
                    baseObj.push(obj);
                }
            } else {
                obj['id'] = $(item).data('id');
                customBaseObjectRemove.push(obj);
            }

        });
        if (baseObj.length > 0) {
            formData[cfArrayName][$(e).attr("data-id")] = JSON.stringify(baseObj);
        }
        if (baseObj.length === 0 && customBaseObjectRemove.length > 0) {
            console.log("Remove object", e);
            formData['_custom_remove'] = JSON.stringify(customBaseObjectRemove);
        }
    };

    function loteCfEditBeforeSerialise(parentForm)
    {
        var f = new LoteCfForm();
        f.beforeCfSerialise(parentForm);
    }

    function loteCfEditBeforeSubmit(parentForm)
    {
        var f = new LoteCfForm();
        return f.beforeCfSubmit(parentForm);
    }

    async function getLoteCfEditValues(formData, cfArrayName, parentForm) {
        formData[cfArrayName] = {};
        var f = new LoteCfForm();
        if (parentForm) {
            await f.getFormCfValues(formData, cfArrayName, parentForm);
        }
        else {
            await f.getCfValues(formData, cfArrayName);
        }
        return formData;
    }


    LoteCfForm.prototype.getFormCfValues = function (formData, cfArrayName, parentForm) {
        $(parentForm).find(".custom_field_edit").each(function (i, e) {
            var f = $(e).data('function');
            if (f && typeof LoteCfForm.prototype[f] == 'function') {
                LoteCfForm.prototype[f](formData, e, cfArrayName);
            }
        });
    };


    LoteCfForm.prototype.beforeCfSerialise = function (parentForm) {
        $(parentForm).find(".custom_field_edit").each(function (i, e) {
            var f = $(e).data('serialise-function');
            if (f && typeof LoteCfForm.prototype[f] == 'function') {
                LoteCfForm.prototype[f](parentForm, e);
            }
        });
    };

    LoteCfForm.prototype.beforeCfSubmit = function (parentForm) {
        var fields = [];
        var emptyFields = [];
        $(parentForm).find('input[type="radio"].custom_field_edit.required').each(function (i, e) {
            if($(e).is(':checked')) {
                fields[$(e).attr('name')] = 'required';
            }
        });
        $(parentForm).find('input[type="radio"].custom_field_edit.required').each(function (i, e) {
            if($(e).is(':checked')) {

            } else {
                if($(e).attr('name') != undefined && fields[$(e).attr('name')] == undefined) emptyFields[$(e).attr('name')] = 'required';
            }
        });
        setCfErrors(emptyFields, parentForm);
        if(emptyFields.length > 0) {
            $('.form_buttons').show();
            $('.form_processing').hide();
            return false;
        }
    };

    LoteCfForm.prototype.beforeCfSerialisePublicGroup = function (formData, e, cfArrayName) {
        var name = $(e).data('name');
        var publicGroups = {};
        $(e).parent().find('input[data-key="' + name + '"]').each(function (i, el) {
            if($(el).is(":checked")){
                publicGroups[$(el).attr("data-value")] = "1";
            }
            else {
                publicGroups[$(el).attr("data-value")] = "0";
            }
        });
        $(e).val(JSON.stringify(publicGroups));
    };

    LoteCfForm.prototype.beforeCfSerialiseMediaFile = function (formData, e, cfArrayName) {
        var container = jQuery(e).closest('.media_field_container');
        var numInProgress = jQuery('li.qq-in-progress', container).length;
        if(numInProgress > 0) {
            jQuery(e).val("in-progress");
        } else {
            jQuery(e).val(jQuery(e).attr('data-media-files'));
        }
    };

    LoteCfForm.prototype.beforeCfSerialiseMatrix = function (formData, e, cfArrayName) {
        var values = {};
        var id = $(e).data('id');
        var matrixType = $(e).data('matrix-type');
        if(matrixType=="radio" || matrixType=="checkbox") {
            $(e.form).find('input[data-id="matrix_'+matrixType+'_' + id + '"]').each(function (i, el) {
                if ($(el).is(":checked")) {
                    if(typeof(values[$(el).data("matrix-row")]) == 'undefined') {
                        values[$(el).data("matrix-row")] = {};
                    }
                    values[$(el).data("matrix-row")][$(el).data("matrix-column")] = 1;
                }
            });
        }
        else {
            $(e.form).find('input[data-id="matrix_text_' + id + '"]').each(function (i, el) {
                if($(el).val()) {
                    if(typeof(values[$(el).data("matrix-row")]) == 'undefined') {
                        values[$(el).data("matrix-row")] = {};
                    }
                    values[$(el).data("matrix-row")][$(el).data("matrix-column")] = $(el).val();
                }
            });
        }
        $(e).val(JSON.stringify(values));
    };

    LoteCfForm.prototype.beforeCfSerialiseRecaptcha = function (parentForm, e) {
        var dataElement = $('#' + $(e).data('id'));
        $(dataElement).val(grecaptcha.getResponse());
    };

    LoteCfForm.prototype.beforeCfSerialiseDate = function (parentForm, e) {
        var id = $(e).attr('id');
        $(e).val($('#' + id + '_date_alt').val());
    };

    LoteCfForm.prototype.beforeCfSerialiseTime = function (parentForm, e) {
        var id = $(e).attr('id');
        var element = $('#' + id + '_time');
        var time = timepickiConvert(element);
        $(e).val(time);
    };

    LoteCfForm.prototype.beforeCfSerialiseDateTime = function (formData, e, cfArrayName) {
        var id = $(e).attr('id');
        var element = $('#' + id + '_time');
        var time = timepickiConvert(element);

        var value = null;
        var date = $('#' + id + '_date_alt').val();
        if (date && time) {
            value = date + ' ' + time;
        }
        else if (date) {
            value = date;
        }
        else if (time) {
            value = time;
        }
        $(e).val(value);
    };
    LoteCfForm.prototype.beforeCfSerialiseSignature = function (formData, e, cfArrayName) {

    };

    LoteCfForm.prototype.beforeCfSerialiseMultiSelect = function (parentForm, e) {
        var id = $(e).attr('id');
        var baseObj = [];
        if ($(e).val() !== null) {
            $.each($(e).val(), function (index, itemId) {
                var obj = {
                    id: itemId,
                    value: ''
                };

                var itemValid = true;
                if (itemId == 0 && $('#' + id + "_custom").is(':visible')) {
                    var customInput = $('#' + id + "_custom").val();
                    obj['value'] = customInput;
                    itemValid = customInput !== '';
                } else {
                    obj['value'] = $('#' + id + '_option_' + itemId).data('value');
                }

                if (itemValid) {
                    baseObj.push(obj);
                }
            });
        }

        var dataField = $(parentForm).find("input[name='"+$(e).data('id')+"']");
        if (baseObj.length > 0) {
            dataField.val(JSON.stringify(baseObj));
        }
    };


    LoteCfForm.prototype.beforeCfSerialiseCheckBox = function (parentForm, e) {
        var id = $(e).attr('id');
        var dataField = $(parentForm).find("input[name='" + $(e).data('id') + "']");
        var baseObj = [];
        $.each($(e).find('input[type="checkbox"]'), function (index, item) {
            var obj = {};
            if ($(item).is(':checked')) {
                obj['id'] = $(item).val();

                var itemValid = true;
                if ($(item).val() == 0 && $('#cf_field_edit_' + $(e).data('id') + '_custom').is(':visible')) {
                    var customInput = $('#cf_field_edit_' + $(e).data('id') + '_custom').val();
                    obj['value'] = customInput;
                    itemValid = customInput !== '';
                } else {
                    obj['value'] = $(item).data('value');
                }

                if (itemValid) {
                    baseObj.push(obj);
                }
            }
        });
        if (baseObj.length > 0) {
            dataField.val(JSON.stringify(baseObj));
        }
    };


    LoteCfForm.prototype.beforeCfSerialiseRadioButton = function (parentForm, e) {
        var id = $(e).attr('id');
        var dataField = $(parentForm).find("input[name='" + $(e).data('id') + "']");
        var baseObj = [];
        $.each($(e).find('input[type="radio"]'), function (index, item) {
            var obj = {};
            if ($(item).is(':checked')) {
                obj['id'] = $(item).val();

                var itemValid = true;
                if ($(item).val() == 0 && $('#cf_field_edit_radio_' + $(e).data('id') + '_custom').is(':visible')) {
                    var customInput = $('#cf_field_edit_radio_' + $(e).data('id') + '_custom').val();
                    obj['value'] = customInput;
                    itemValid = customInput !== '';
                } else {
                    obj['value'] = $(item).data('value');
                }

                if (itemValid) {
                    baseObj.push(obj);
                }
            }
        });
        if (baseObj.length > 0) {
            dataField.val(JSON.stringify(baseObj));
        } else {
            dataField.val("");
        }
    };


    LoteCfForm.prototype.beforeCfSerialiseSingleSelect = function (parentForm, e) {
        var id = $(e).attr('id');
        var dataField = $(parentForm).find("input[name='"+$(e).data('id')+"']");
        var obj = {
            id: $(e).val()
        };

        var itemValid = true;
        if ($(e).val() == '0' && $('#' + id + '_custom').is(':visible')) {
            var customInput = $('#' + id + '_custom').val();
            obj['value'] = customInput;
            itemValid = customInput !== '';
        } else if ($(e).val() !== '') {
            obj['value'] = $(e).find(':selected').data('value');
        } else {
            itemValid = false;
        }

        var baseObj = [obj];

        if (itemValid) {
            dataField.val(JSON.stringify(baseObj));
        }
    };





    function setCfErrors(errors, form) {
        for (var f in errors) {
            if (form) {
                var htmlError = document.createElement('div');
                htmlError.textContent = 'There are errors within your form. Please check that all your mandatory fields are completed.';
                htmlError.setAttribute('class','errorDiv');

                $(form).find('#cf_field_edit_error_' + f).html(errors[f]).closest('.fwrp').addClass('fer');
                if ($('div.errorDiv').length) {

                } else {
                    $(form).find('.form_buttons').prepend(htmlError);
                }
            }
            else {
                $('#cf_field_edit_error_' + f).html(errors[f]).closest('.fwrp').addClass('fer');
            }
        }

    }

    function setFormProcessing(form, isProcessing, isBack) {
        if (isProcessing) {
            if(isBack){
                $(form).addClass("is-processing-back");
            }
            else{
                $(form).find('input[type="submit"], button[type="submit"]').prop('disabled', true).addClass("loading");
                $(form).addClass("is-processing");
            }
        }
        else {
            if(isBack){
                $(form).removeClass("is-processing-back");
            }
            else{
                $(form).find('input[type="submit"], button[type="submit"]').prop('disabled', false).removeClass("loading");
                $(form).removeClass("is-processing");
            }
        }
    }

    $(function() {
        $('.only_one_radio').off().on('click', function() {
            $('.only_one_radio').prop('checked', false);
            $(this).prop('checked', true);
        });
    });


</script><script type="text/javascript">

    function setupFormButtons(formId, recordId, nextPage, prevPage, formInstance)
    {
        setupPrevButton(formId, recordId, prevPage, formInstance);
        setupFormSubmit(formId, recordId, nextPage, formInstance);
        $('#lote_form_'+formId+' .lote_form_main button[type=submit], .lote_form_main input[type=button]').off().on('click', function(e) {
            e.preventDefault();
            var thisForm = $("#lote_form_"+formId);
            /*
            $('#lote_form_'+formId+' .form_buttons .btn').addClass('greyed_out');
            $('#lote_form_'+formId+' .form_buttons .btn').prop('disabled', true);
            $(this).addClass('loading');
            */
            if(typeof(formInstance) != 'undefined' && formInstance != '') {
                thisForm = $("[id='lote_form_"+formId+"'][data-form-instance='"+formInstance+"']");
            }
            if($(this).hasClass("form_prev_button_"+formId)) {
                goToFormPage(formId, recordId, prevPage, true);
            } else {
                thisForm.submit();
            }
        });
    }

    function setupPrevButton(formId, recordId, prevPage, formInstance)
    {
        setupProgressClick(formId, recordId);
    }

    function setupFormSubmit(formId, recordId, nextPage, formInstance)
    {
        var thisForm = $("#lote_form_"+formId);
        if(typeof(formInstance) != 'undefined' && formInstance != '') {
            thisForm = $("[id='lote_form_"+formId+"'][data-form-instance='"+formInstance+"']");
        }
        var options = {
            url: 'https://www.heath.derbyshire.sch.uk/form/submit.json',
            dataType : "json",
            type: "POST",
            data : { submit_url : window.location.href, group_id : $(thisForm).find(".group_id").val(), '_lote_form_module' : '1' },
            success:    function(json) {
                clearFormErrors();
                if (json.success) {
                    if(json.completed) {
                        completeForm(thisForm, formId, json.record_id, formInstance, json);
                    }
                    else {
                        goToFormPage(formId, json.record_id, json.next_page, false);
                    }
                }
                else if(json.error) {
                    setFormProcessing(thisForm, false);
                    alert(json.error);
                }
                else {
                    $('#lote_form_'+formId+' .form_buttons .btn').removeClass('greyed_out');
                    $('#lote_form_'+formId+' .form_buttons .btn').removeClass('loading');
                    $('#lote_form_'+formId+' .form_buttons .btn').prop('disabled', false);
                    setCfErrors(json.errors, thisForm);
                    setAdditionalFormErrors(json.additional_form_errors);
                    setFormProcessing(thisForm, false);
                }
                var fName = "onLoteFormSubmitCallback"+formId;
                if (typeof window[fName] === "function") {
                    window[fName](formId, thisForm, json);
                }
            },
            error: function (request, status, error) {
                if (request.status) {
                    alert('Error: ' + request.status + '\\\\n' + request.statusText);
                }
                setFormProcessing(thisForm, false);
            },
            beforeSerialize: function($form, options) {
                loteCfEditBeforeSerialise(thisForm);
            },
            beforeSubmit: function(formData, jqForm, options) {
                var fName = "getAdditionalFormData"+formInstance;
                if (typeof window[fName] === "function") {
                    window[fName](formData);
                }
                setFormProcessing(thisForm, true);
                return loteCfEditBeforeSubmit(thisForm);
            }

        };
        $(thisForm).ajaxForm(options);
    }

    function setAdditionalFormErrors(additionalFormErrors)
    {
        for(formErrors in additionalFormErrors) {
            for (var f in additionalFormErrors[formErrors]) {
                $('#' + f + '_error').html(additionalFormErrors[formErrors][f][0]).parent().addClass('fer');
            }
        }

    }


    function setupProgressClick(formId, recordId) {

        $('#save_progress').off('click').on('click', function() {
            var form = $("#lote_form_"+formId);
            var formData = {} ;
            getLoteCfEditValues(formData,'_fields', $(this).parents());

            formData['id'] = formId;
            formData['submit_url'] = window.location.href;
            formData['group_id'] = $(form).find(".group_id").val();
            formData['record_id'] = $(form).find("#record_id").val();
            formData['current_page'] = $(form).find("#group_id").val();

            $.ajax({
                url: 'https://www.heath.derbyshire.sch.uk/form/saveprogress.json',
                method: 'POST',
                data: formData,
                success: function (json) {
                    clearFormErrors();
                    if (json.success) {
                        $('#record_id').val(json.record_id);
                        alert('Progress Saved');
                    } else if(json.error) {
                        alert(json.error);
                    }
                },
                error: function (request, status, error) {
                    if (request.status) {
                        alert('Error: ' + request.status + '\\\\n' + request.statusText);
                    }
                }
            });

            return false;
        });
    }


    function clearFormErrors() {
        $('.fermsg').html('');
        $('.fwrp').removeClass("fer");
        $('.errorDiv').remove();
    }

    function completeForm(form, formId, recordId, formInstance, rawJsonResponse) {
        
        var customCallbackName = 'onLoteFormCompletedCallback'+formId;

        if (typeof(callback) != 'undefined' && typeof window[callback] === "function") {
            window[callback](formId, recordId);
        }
        else if (typeof window[customCallbackName] === "function") {
            window[customCallbackName](formId, recordId);
        } else if (rawJsonResponse.redirect_url !== undefined) {
            window.location = rawJsonResponse.redirect_url;
        } else {
                        var form = $("#lote_form_"+formId);
            if(typeof(formInstance) != 'undefined' && formInstance != '') {
                var form = $("[id='lote_form_"+formId+"'][data-form-instance='"+formInstance+"']");
            }
            var formData = {} ;
            getLoteCfEditValues(formData,'_fields', form);
            formData['id'] = formId;
            formData['submit_url'] = window.location.href;
            formData['group_id'] = $(form).find(".group_id").val();
            formData['record_id'] = recordId;
            formData['current_page'] = $(form).find("#group_id").val();

            $.ajax({
                url: 'https://www.heath.derbyshire.sch.uk/form/confirmation/2.shtml',
                method: 'POST',
                data : formData,
                success: function (html) {
                    $('.lote_form_completed', form).html(html);
                },
                error: function (request, status, error) {
                    if (request.status) {
                        alert('Error: ' + request.status + '\\\\n' + request.statusText);
                    }
                }
            });
                        $(form).find(".lote_form_main").hide();
            $(form).parent().find(".lote_form_completed").show();
            $('html, body').animate({
                scrollTop:  $(form).parent().offset().top - 200
            }, 500);
            var thisForm = $("#lote_form_"+formId);
            setFormProcessing(thisForm, false);

        }
    }

    function goToFormPage(formId, recordId, page, isBack) {
        var thisForm = $("#lote_form_"+formId);
        if(isBack){
            setFormProcessing(thisForm, true, true);
        }
        $.get( "https://www.heath.derbyshire.sch.uk/form/page/" + formId + "/" + page + "/" + recordId + ".shtml", function( data ) {
            var loteForm = $("#lote_form_" + formId);
            loteForm.find('.lote_form_main').html(data);
            if(isBack){
                setFormProcessing(thisForm, false, true);
            }
            else{
                setFormProcessing(thisForm, false);
            }

            $('html, body').animate({
                scrollTop: Math.max(loteForm.offset().top - 150, 0)
            }, 350);


        });
    }


</script>    <div class="form_wrap clearfix container content-wrap">
        <div class="form_h2_name emspace h20"></div>

        <h2 class="form_h2_name">Contact Us</h2>
        <div class="form_h2_name emspace h10"></div>

        <form id="lote_form_2" autocomplete="off" class="fom hide-title" enctype="multipart/form-data" data-form-instance="" novalidate="novalidate">
            <div class="lote_form_main">
                <div class="lote_form_msg"></div>
<div id="lote_form_additional_fields">
    </div>
<div class="lote_form_page_fields">
	    <input type="hidden" class="group_id" value="6">
                    			<div class="form_question_wrapper">
			            	<div class="form-group fwrp ">
            <label for="cf_field_edit_27">First Name   *</label>
            <input type="text" class="auto_complete_field custom_field_edit form-control" id="cf_field_edit_27" name="27" data-function="getTextValue" data-id="27" data-group="6" value="">
            <div class="form_description">
        <div class="form_description">
            
        </div>
    </div>
        <div class="fermsg" id="cf_field_edit_error_27"></div>
</div>
						</div>
                            			<div class="form_question_wrapper">
			            	<div class="form-group fwrp ">
            <label for="cf_field_edit_28">Last Name   *</label>
            <input type="text" class="auto_complete_field custom_field_edit form-control" id="cf_field_edit_28" name="28" data-function="getTextValue" data-id="28" data-group="6" value="">
            <div class="form_description">
        <div class="form_description">
            
        </div>
    </div>
        <div class="fermsg" id="cf_field_edit_error_28"></div>
</div>
						</div>
                            			<div class="form_question_wrapper">
			            	<div class="form-group fwrp ">
            <label for="cf_field_edit_30">Email  *</label>
            <input type="email" class="custom_field_edit form-control" id="cf_field_edit_30" name="30" data-function="getTextValue" data-id="30" data-group="6" value="">
                <div class="form_description">
            
        </div>
        <div class="fermsg" id="cf_field_edit_error_30"></div>
</div>

						</div>
                            			<div class="form_question_wrapper">
			            	<div class="form-group fwrp ">
            <label for="cf_field_edit_42">Mobile Phone  </label>
            <input type="text" class="auto_complete_field custom_field_edit form-control" id="cf_field_edit_42" name="42" data-function="getTextValue" data-id="42" data-group="6" value="">
            <div class="form_description">
        <div class="form_description">
            
        </div>
    </div>
        <div class="fermsg" id="cf_field_edit_error_42"></div>
</div>
						</div>
                            			<div class="form_question_wrapper">
			            	<div class="form-group fwrp ">
            <label for="cf_field_edit_31">Message  *</label>
            <textarea class="custom_field_edit form-control" id="cf_field_edit_31" name="31" data-function="getTextValue" data-id="31" data-group="6"></textarea>
                <div class="form_description">
            
        </div>
        <div class="fermsg" id="cf_field_edit_error_31"></div>
</div>

						</div>
                            			<div class="form_question_wrapper">
			            	<div class="form-group fwrp ">
	<script src="https://www.google.com/recaptcha/api.js"></script>
	<div class="g-recaptcha custom_field_edit" data-sitekey="6LeZNsoZAAAAAC_atze0mLyfoGUm4ICz_xBWIl7d" id="cf_field_edit_64" data-function="getRecaptchaValue" data-serialise-function="beforeCfSerialiseRecaptcha" data-id="64" data-group="6"><div style="width: 304px; height: 78px;"><div><iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-c0f2reqzvtrp" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LeZNsoZAAAAAC_atze0mLyfoGUm4ICz_xBWIl7d&amp;co=aHR0cHM6Ly93d3cuaGVhdGguZGVyYnlzaGlyZS5zY2gudWs6NDQz&amp;hl=en&amp;v=jdMmXeCQEkPbnFDy9T04NbgJ&amp;size=normal&amp;anchor-ms=20000&amp;execute-ms=15000&amp;cb=7hs8m9grnhxd"></iframe></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div><iframe style="display: none;"></iframe></div>
    <div class="fermsg" id="cf_field_edit_error_64"></div>
    <input name="64" type="hidden" id="64">
</div>

						</div>
            </div>

<div class="emspace h20 bod"></div>
<div class="fwrp bod">

    <div class="form_buttons">
	    	    	                <button type="submit" class="nomargin button button-large button-rounded submit_button"><span>Submit</span><i class="fa fa-spinner fa-spin fa-2x fa-fw progress-ind"></i></button>
	    	    <input type="hidden" name="id" value="2" id="form_id">
	    <input type="hidden" name="record_id" value="" id="record_id">
	    <input type="hidden" name="instance" value="" id="instance">
    </div>
    <div class="form_processing">
        <button><div class="form_loader">Loading...</div></button>
    </div>

</div>

<script type="text/javascript">
    $(function(){
        setupFormButtons('2', '', '', '', '');

		    });
</script>            </div>
            <div class="lote_form_completed" style="display: none;">
                                    <p>Thank you for contacting us. Your submission was successful.</p>
                            </div>
        </form>
    </div>


</div>

    
                    
<div id="tiles_2" class="portfolio portfolio-nomargin grid-container portfolio-notitle portfolio-full grid-container clearfix">
    <article class="portfolio-item pf-media pf-icons"><div class="portfolio-image">
            <a href="/contact">
                <img src="/images/contact_tile.jpg" alt="Contact Us"><div class="portfolio-overlay"></div>
            </a>
        </div>
        <div class="portfolio-desc">
            <h3><a href="/contact">Contact Us</a></h3>
            <span>Get help with your enquiry</span>        </div>
    </article><article class="portfolio-item pf-media pf-icons"><div class="portfolio-image">
            <a href="https://twitter.com/HPSDerbyshire">
                <img src="/images/twitter_tile.jpg" alt="Twitter"><div class="portfolio-overlay"></div>
            </a>
        </div>
        <div class="portfolio-desc">
            <h3><a href="https://twitter.com/HPSDerbyshire">Twitter</a></h3>
            <span>Learn more about us</span>        </div>
    </article><article class="portfolio-item pf-media pf-icons"><div class="portfolio-image">
            <a href="https://heathprimary.plus.co.uk/calendar/1">
                <img src="/images/hop1_slide3.jpg" alt="School Calendar"><div class="portfolio-overlay"></div>
            </a>
        </div>
        <div class="portfolio-desc">
            <h3><a href="https://heathprimary.plus.co.uk/calendar/1">School Calendar</a></h3>
            <span>What's upcoming in the school?</span>        </div>
    </article></div>

        
    

</section>




    



<footer id="footer" class="footer4 primaryBg dark">
	<div class="container">

			<div class="row">
				<div class="col-sm-4">
						<p>
						<strong>Phone:</strong> 01246 850277<br>														Slack Lane<br>
							Heath Chesterfield S44 5RH
						</p>
					<p class="policies">
													<a href="/privacy" title="Privacy Policy">Privacy Policy</a> /													<a href="/cookie" title="Cookie Policy">Cookie Policy</a> /													<a href="/site-map" title="Site Map">Site Map</a> 												<br>


											Copyrights © 2025 All Rights Reserved by Heath Primary School</p>
					
				</div>
				<div class="col-sm-8">

					<div class="dflex justifyend">
    <a href="https://twitter.com/HPSDerbyshire" class="social-icon si-light si-rounded si-twitter">
        <span>Visit our Twitter</span>
      	<i class="icon-twitter"></i>
		<i class="icon-twitter"></i>
    </a>



 </div>

				</div>

			</div>
	</div>
</footer>

    
                    
<script>

                    jQuery('.sz-gallery').each(function() {
                        var array = jQuery(this).attr('data-parameters').split(',');
                        var parameters = {};

                        jQuery.each(array, function(key, value) {
                            var split = value.split(':');

                            if (!isNaN(Number(split[1]))) {
                                split[1] = Number(split[1]);
                            } else if (split[1] === "true" || split[1] === "false") {
                                split[1] = (split[1] === "true");
                            } else {
                                split[1] = String(split[1]);
                            }
                            parameters[split[0]] = split[1];
                        });

                        jQuery(this).unitegallery(parameters);
                        jQuery(this).show();
                    });
                    $('.read-more-item').each(function(){
                        var firstPara = $(this).find('p:first').html();
                        $(this).parent().prepend('<p class="articleSummary">' + firstPara.substring(0,500) + '...</p>');
                    });
                }
			})


	}

	$(function(){

        $('.tags_checked').off('change').on("change", function () {
           executeSearch();
           console.log('Tags Checked');
        });


		$("#search_phrase").keypress(function (e) {
			if(e.which == 13) { // the enter key code
				executeSearch();
                console.log('Search Phase');
			}
		});

        $("#search_clear").click(function(){
            $("#search_phrase").val("");
            executeSearch();
            console.log('Search Clear');
        });

        $('.clearTags').on('click', function(){
            $('.tagwrp input:radio').prop("checked", false);
            executeSearch();
            console.log('Uncheck');
        });
        $('.clearSideTags').on('click', function(){
            $('aside.sidebar input:radio').prop("checked", false);
            $('#clearButton').addClass('grey');
            executeSearch();
        });
         $('aside.sidebar label.radio-style-1-label').on('click', function(){
            $('#clearButton').removeClass('grey');
         });

         $(document).on('click', '.event-tag, .article-tag', function () {
             $('input.tags_checked[id="radio-' + $(this).attr('id') + '"]').prop('checked', true);
             executeSearch();
         });
	});

</script><!-- External canvas/functions.js removed - using local /assets/js/functions.js instead -->

	<script src="/website/custom.js?skin_id="></script>

	<script>
    var actualCaretPositionBookmark;
</script>
<script src="/assets/js/tinymce.min.js"></script>
<script>
	function setWysiwygValue(id, value) {
		tinymce.get(id).setContent(value);
	}
    function getWysiwygValue(id) {
        return tinyMCE.get(id).getContent();
    }
	function getWysiwygValuePlainText(id) {
		return tinyMCE.get(id).getContent({ format: 'text' });
	}
	function insertIntoWysiwyg(value, id) {
        if(actualCaretPositionBookmark != undefined) tinyMCE.activeEditor.selection.moveToBookmark(actualCaretPositionBookmark);
//        console.log(tinyMCE.activeEditor);
//        //tinyMCE.setActive(id);
//        tinyMCE.activeEditor.id = id;
//        console.log(tinyMCE.activeEditor.id);
//        tinyMCE.execCommand('mceFocus',false,'#'+id);
        tinyMCE.activeEditor.execCommand('mceInsertContent', false, ' ' + value + ' ');
	}
	function setUpTextEditor(id, isFullPage, toolbar1Custom, cssIncludes, isNewsletter, profile, relativeUrls) {

		var plugins = [
			"linkfrontend spellchecker link image external responsivefilemanager jbimages custom email phone sb_url"
		];

		var menubar = false;
		var height = "400px";
		if($('#'+id).data('tinymce-height') != undefined) {
			height = $('#'+id).data('tinymce-height');
		}
		toolbarOptions = "   link | styleselect |  bold italic underline bullist numlist | spellchecker | removeformat  ";
		if($('#'+id).siblings('div.mce-tinymce').length == 0) {

			var settings = {
                branding: false,
				selector: '#' + id,
				width: "auto",
				height: height,
				statusbar: true,
				resize: "both",
				theme: "modern",
				valid_elements: "*[*]",
				extended_valid_elements: "*[*]",
                valid_children : "multiline[a],singleline[a]",
				plugins: plugins,
				menubar: menubar,
				cleanup: false,
				verify_html: false,
                toolbar: toolbarOptions,
				image_advtab: true,
				contextmenu: "link image inserttable | cell row column deletetable",
				external_filemanager_path: "https://www.heath.derbyshire.sch.uk/theme/_admin/bluetree/js/tinymce/js/filemanager/",
				filemanager_title: "File Manager",
				external_plugins: {"filemanager": "https://www.heath.derbyshire.sch.uk/theme/_admin/bluetree/js/tinymce/js/filemanager/plugin.js"},
				image_list: [],
                paste_preprocess: function (plugin, args) {

					args.content += '';
				},
				setup: function (editor) {
                    editor.on("keyup", function (editor, e) {
                        actualCaretPositionBookmark = tinyMCE.activeEditor.selection.getBookmark(2, true);
                    });
                    editor.on("click", function (editor, e) {
                        actualCaretPositionBookmark = tinyMCE.activeEditor.selection.getBookmark(2, true);
                    });
					editor.on('getContent', function (e) {

                        if (e.content.indexOf("<a") >= 0) {
                            var data = e.content;
                            var hrefArr = [];
                            $(data).find("a").each(function () {
                                var attr = $(this).attr('lote_id');
                                if (typeof attr !== typeof undefined && attr !== false && $.isNumeric(attr)) {
                                    var text = $(this).text();
                                    e.content = e.content.replace(text+"</a>", text+'</lotelink>');
                                }
                            });
                            e.content = e.content.replace(/\\\\<a type="page"/g, '<lotelink type="page"');
                            e.content = e.content.replace(/\\\\<a type="file"/g, '<lotelink type="file"');
                            var data = e.content;
                            $(data).find("a").each(function () {
                                var attr = $(this).attr('lote_id');
                                if (typeof attr !== typeof undefined && attr !== false && $.isNumeric(attr)) {
                                    var text = $(this).attr('href');
                                    e.content = e.content.replace('<a href="'+text+'"', '<lotelink href="'+text+'"');
                                }
                            });
                            var data = e.content;
                            $(data).find("a").each(function () {
                                var attr = $(this).attr('lote_id');
                                if (typeof attr !== typeof undefined && attr !== false && $.isNumeric(attr)) {
                                    e.content = e.content.replace('<a lote_id="'+attr+'"', '<lotelink lote_id="'+attr+'"');
                                }
                            });
                        }
					});
                    editor.on('paste', function (e) {
                        var paste;
                        if (e.clipboardData.types.indexOf('text/plain') >= 0) {
                            paste = e.clipboardData.getData('text/plain');
                        }

                        if (e.clipboardData.types.indexOf('text/html') >= 0) {
                            var tempPaste = e.clipboardData.getData('text/html');
                            if (tempPaste.includes('')) { // check if the content is a special type such as actual html, image or file
                                var regex = new RegExp("([^]*)|([^]*)", "g"); // tinymce copy includes full html and body tags, and the actual content is actually between the comments
                                paste = tempPaste.replace(regex, '');
                            }
                        }

                        if (paste !== undefined) {
                            paste = paste.replace(/<script[^]*<\\\\/script>/g, ''); // replaces everything in-between and including (<scrip -- <\\\\script>)
                            e.preventDefault();
                            insertIntoWysiwyg(paste);
                        }
                    });
					editor.on('paste_preprocess', function (e) {
						console.log('paste_preprocess', e.content);
					});
					editor.on('beforeSetContent', function (e) {
                        e.content = e.content.replace(/<p>(<a[^<]*(<img[^<]*)<\\\\/a>)<\\\\/p>/gi, function (a) {
                            return a.replace('<p>', '').replace('</p>', '');
                        });
						if (e.content.indexOf("<lotelink") >= 0) {

                            var data = e.content;
                            $(data).find("lotelink").each(function () {
                                var attr = $(this).attr('lote_id');
                                if (typeof attr !== typeof undefined && attr !== false && $.isNumeric(attr)) {
                                    var text = $(this).attr('href');
                                    e.content = e.content.replace('<lotelink href="'+text+'"', '<a href="'+text+'"');
                                }

                            });

                            var data = e.content;
                            $(data).find("lotelink").each(function () {
                                var attr = $(this).attr('lote_id');
                                if (typeof attr !== typeof undefined && attr !== false && $.isNumeric(attr)) {
                                    e.content = e.content.replace('<lotelink lote_id="'+attr+'"', '<a lote_id="'+attr+'"');
                                }

                            });

							e.content = e.content.replace(/\\\\<lotelink type="img"/g, '<img');
							e.content = e.content.replace(/\\\\<lotelink type="page"/g, '<a type="page"');
							e.content = e.content.replace(/\\\\<lotelink type="file"/g, '<a type="file"');
                            e.content = e.content.replace(/\\\\<\\\\/lotelink>/g, '</a>');

						}

					});
				},
                spellchecker_language: "en_GB",
                spellchecker_rpc_url: 'spellchecker.php',
                link_formats: ["Link To URL", "Link To Email", "Link To Phone"],
                is_campaign: (profile !== undefined && profile === "campaign"),
                sz_profile: profile
			};

            if(typeof(toolbar) != 'undefined') {
                settings.toolbar1 = toolbar1Custom;
            }

            //Add CSS includes if provided
            if(cssIncludes) {
                settings.content_css = cssIncludes;
            }

            //If newsletter editor...
            if(isNewsletter) {
                settings.width = "800px";
                settings.resize = true;
            }

            if(typeof relativeUrls == 'undefined' || relativeUrls == false) {
                settings.relative_urls = false;
                settings.convert_urls = false;
            }

			tinymce.init(settings);
		}
	}

    function setUpTextEditorFrontEnd(id, isFullPage, toolbar1Custom, cssIncludes, isNewsletter, profile, relativeUrls) {

        var plugins = [
            "sb_links paste spellchecker textcolor sb_images sb_filemanager sb_table lists"
        ];

        var menubar = false;
        var height = "400px";
        if($('#'+id).data('tinymce-height') != undefined) {
            height = $('#'+id).data('tinymce-height');
        }
        toolbarOptions = "sb_links | sb_images | table |styleselect |  fontsizeselect forecolor | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | removeformat  ";
        if($('#'+id).siblings('div.mce-tinymce').length == 0) {

            var settings = {
                branding: false,
                selector: '#' + id,
                width: "auto",
                height: height,
                statusbar: true,
                paste_auto_cleanup_on_paste : true,
                paste_remove_styles: true,
                paste_remove_styles_if_webkit: true,
                paste_strip_class_attributes: true,
                resize: "both",
                theme: "modern",
                valid_elements: "*[*]",
                extended_valid_elements: "*[*]",
                valid_children : "multiline[a],singleline[a]",
                plugins: plugins,
                menubar: menubar,
                cleanup: false,
                verify_html: false,
                toolbar: toolbarOptions,
                image_advtab: true,
                contextmenu: "link image inserttable | cell row column deletetable",
                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 36px",
                image_list: [],
                paste_preprocess: function (plugin, args) {
                    args.content += '';
                },
                setup: function (editor) {
                    editor.on("keyup", function (editor, e) {
                        actualCaretPositionBookmark = tinyMCE.activeEditor.selection.getBookmark(2, true);
                    });
                    editor.on("click", function (editor, e) {
                        actualCaretPositionBookmark = tinyMCE.activeEditor.selection.getBookmark(2, true);
                    });
                    editor.on('getContent', function (e) {
                       
                        if (e.content.indexOf("<a") >= 0) {
                            var data = e.content;
                            var hrefArr = [];
                            $(data).find("a").each(function () {
                                var attr = $(this).attr('lote_id');
                                if (typeof attr !== typeof undefined && attr !== false && $.isNumeric(attr)) {
                                    var text = $(this).text();
                                    e.content = e.content.replace(text+"</a>", text+'</lotelink>');
                                }
                            });
                            e.content = e.content.replace(/\\\\<a type="page"/g, '<lotelink type="page"');
                            e.content = e.content.replace(/\\\\<a type="file"/g, '<lotelink type="file"');
                            var data = e.content;
                            $(data).find("a").each(function () {
                                var attr = $(this).attr('lote_id');
                                if (typeof attr !== typeof undefined && attr !== false && $.isNumeric(attr)) {
                                    var text = $(this).attr('href');
                                    e.content = e.content.replace('<a href="'+text+'"', '<lotelink href="'+text+'"');
                                }
                            });
                            var data = e.content;
                            $(data).find("a").each(function () {
                                var attr = $(this).attr('lote_id');
                                if (typeof attr !== typeof undefined && attr !== false && $.isNumeric(attr)) {
                                    e.content = e.content.replace('<a lote_id="'+attr+'"', '<lotelink lote_id="'+attr+'"');
                                }
                            });
                        }
                    });
                    editor.on('paste', function (e) {
                        var paste;
                        if (e.clipboardData.types.indexOf('text/plain') >= 0) {
                            paste = e.clipboardData.getData('text/plain');
                        }

                        if (e.clipboardData.types.indexOf('text/html') >= 0) {
                            var tempPaste = e.clipboardData.getData('text/html');
                            if (tempPaste.includes('')) { // check if the content is a special type such as actual html, image or file
                                var regex = new RegExp("([^]*)|([^]*)", "g"); // tinymce copy includes full html and body tags, and the actual content is actually between the comments
                                paste = tempPaste.replace(regex, '');
                            }
                        }

                        if (paste !== undefined) {
                            paste = paste.replace(/<script[^]*<\\\\/script>/g, ''); // replaces everything in-between and including (<scrip -- <\\\\script>)
                            e.preventDefault();
                            insertIntoWysiwyg(paste);
                        }
                    });
                    editor.on('paste_preprocess', function (e) {
                        console.log('paste_preprocess', e.content);
                    });
                    editor.on('beforeSetContent', function (e) {

                        if (e.content.indexOf("<lotelink") >= 0) {

                            var data = e.content;
                            $(data).find("lotelink").each(function () {
                                var attr = $(this).attr('lote_id');
                                if (typeof attr !== typeof undefined && attr !== false && $.isNumeric(attr)) {
                                    var text = $(this).attr('href');
                                    e.content = e.content.replace('<lotelink href="'+text+'"', '<a href="'+text+'"');
                                }

                            });

                            var data = e.content;
                            $(data).find("lotelink").each(function () {
                                var attr = $(this).attr('lote_id');
                                if (typeof attr !== typeof undefined && attr !== false && $.isNumeric(attr)) {
                                    e.content = e.content.replace('<lotelink lote_id="'+attr+'"', '<a lote_id="'+attr+'"');
                                }

                            });

                            e.content = e.content.replace(/\\\\<lotelink type="img"/g, '<img');
                            e.content = e.content.replace(/\\\\<lotelink type="page"/g, '<a type="page"');
                            e.content = e.content.replace(/\\\\<lotelink type="file"/g, '<a type="file"');
                            e.content = e.content.replace(/\\\\<\\\\/lotelink>/g, '</a>');

                        }

                    });
                },
                spellchecker_language: "en_GB",
                spellchecker_rpc_url: 'spellchecker.php',
                is_campaign: (profile !== undefined && profile === "campaign"),
                sz_profile: profile
            };

            if(typeof(toolbar) != 'undefined') {
                settings.toolbar1 = toolbar1Custom;
            }

            //Add CSS includes if provided
            if(cssIncludes) {
                settings.content_css = cssIncludes;
            }

            //If newsletter editor...
            if(isNewsletter) {
                settings.width = "800px";
                settings.resize = true;
            }

            if(typeof relativeUrls == 'undefined' || relativeUrls == false) {
                settings.relative_urls = false;
                settings.convert_urls = false;
            }

            settings.sb_links_opts = {
                link_url: true,
                link_email: true,
                link_phone: true
            };

            settings.sb_images_opts = {
                link_upload: true,
                link_external: true
            };

            tinymce.init(settings);

        }
    }

    function setupContentEditor(id, isFullPage, toolbar1Custom, cssIncludes, isNewsletter, profile, relativeUrls, wildcards, overrideHeight) {
        var plugins = [
            "contextmenu", "advlist", "autolink", "lists", "print",  "searchreplace", "visualblocks", "visualchars",
            "code", "save", "directionality", "paste", "textcolor",
            "sb_filemanager", "sb_links", "sb_images", "sb_table", "spellchecker"
        ];
        var contextMenu = " sb_links sb_images inserttable elements web_link pdf_viewer";

        var wildcardSettings = {
            content_holder: false,
            update_forms: false
        };

        if (wildcards) {
            if (profile !== 'campaign') {
                plugins.push("sb_elements");
            }
            plugins.push("sb_wildcards");
            contextMenu = contextMenu + " sb_wildcards sb_wildcards_update_form ";

        }

        var toolbarOptions = "sb_images sb_gallery sb_video pdf_viewer sb_links | formatselect | fontsizeselect forecolor | bold italic underline strikethrough | removeformat | alignleft aligncenter alignright alignjustify | outdent indent | bullist numlist  |  undo redo | code";
        if (profile === "campaign"){
            toolbarOptions = "undo redo | fontsizeselect forecolor | bold italic | removeformat | alignleft aligncenter alignright alignjustify | outdent indent | bullist numlist | sb_links | code";
        }
        else if(profile === "manage_app_mobile") {
            toolbarOptions = "undo redo removeformat |  bold italic | alignleft aligncenter alignright | outdent indent | sb_links | sb_images | code ";
        }
        else {
            plugins.push("sb_gallery");
            plugins.push("sb_video");
            contextMenu = "sb_images sb_gallery sb_video pdf_viewer web_link inserttable elements sb_links";
            //contextMenu =  "sb_gallery sb_video "+contextMenu;

        }


        if(isFullPage || isNewsletter) {
            plugins.push("fullpage");
        }

        var validElements = "*[*]";
        var invalidElements = "";
        var validExtendedElements = '*[*]';
        var validChildren = "multiline[a],singleline[a]";

        var menubar = "edit insert view table tools sb_wildcards";
        if(profile === "manage_app_mobile"){
            menubar = false;
        }
        var height = "600px";
        if(profile == "quick_feed" || profile == "summary" ){
            height = "400px";
        }
        else if( profile === "manage_app_mobile"){
            height = "250px";
        }
        else if( profile === "new_content_holder"){
            height = "400px";
        }
        else if(profile === "company_note"){
            height = "330px";
        }


        if (overrideHeight) {
            height = overrideHeight + "px";
        }

        if($('#'+id).siblings('div.mce-tinymce').length == 0) {

            var settings = {
                branding: false,
                selector: '#' + id,
                width: "100%",
                height: height,
                statusbar: true,
                resize: "both",
                //theme_advanced_resizing: true,
                //theme_advanced_resizing_use_cookie : false,
                theme: "modern",
                allow_html_in_named_anchor: true,
                allow_unsafe_link_target: true,

                valid_elements: validElements,
                extended_valid_elements: validExtendedElements,
                invalid_elements: invalidElements,
//                extended_valid_elements: 'iframe[src|width|height|frameborder|scrolling|allowfullscreen]',
                valid_children : validChildren,
                plugins: plugins,
                // menu: {
                //     edit: { title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall' },
                //     insert: {title: 'Insert', items: 'sb_video sb_gallery sb_images'},
                //     view: {title: 'View', items: 'code | visualaid | spellcheck'},
                //     format: {title: 'Format', items: 'bold italic underline strikethrough superscript subscript | formats | removeformat'},
                //     table: {title: 'Table', items: 'inserttable tableprops deletetable | cell row column'},
                //     tools: {title: 'Tools', items: 'spellchecker code'},
                //     sb_wildcards: { title: 'Wildcards' }
                // },
                menubar: menubar,
                cleanup: false,
                verify_html: false,
                toolbar: toolbarOptions,
                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 36px",

                image_advtab: true,
                image_list: [],
                contextmenu: contextMenu,
                setup: function (editor) {
                    editor.on("init", function () {
                        this.getDoc().body.style.fontSize = '14px';
                        this.getDoc().body.style.fontFamily = 'Verdana';
                    });
                    editor.on("keyup", function (editor, e) {
                        actualCaretPositionBookmark = tinyMCE.activeEditor.selection.getBookmark(2, true);
                    });
                    editor.on("click", function (editor, e) {
                        actualCaretPositionBookmark = tinyMCE.activeEditor.selection.getBookmark(2, true);
                    });
                    editor.on('getContent', function (e) {
                        e.content = e.content.replace(/<p>(<img[^<]*)<\\\\/p>/gi, function (a) {
                            return a.replace('<p>', '').replace('</p>', '');
                        });
                    });
                    editor.on('BeforePastePreProcess', function(e) {
                        // This will change any html text back to html tags and sanitise scripts and default comments
                        var regex = new RegExp("([^]*)|([^]*)", "g"); // tinymce copy includes full html and body tags, and the actual content is actually between the comments
                        e.content = e.content.replace(/(&lt;)/g, '<')
                                .replace(/(&gt;)/g, '>')
                                .replace(regex, '')
                                .replace(/<script[\\\\s\\\\S]*?<\\\\/script>/g, '');
                    });
                    editor.on('beforeSetContent', function (e) {
                        e.content = e.content.replace(/<p>(<img[^<]*)<\\\\/p>/gi, function (a) {
                            return a.replace('<p>', '').replace('</p>', '');
                        });
                    });





                },
                spellchecker_language: "en_GB",
                spellchecker_rpc_url: 'spellchecker.php',
                is_campaign: (profile !== undefined && profile === "campaign"),
                sz_profile: profile
            };

            if(typeof(toolbar) != 'undefined') {
                settings.toolbar1 = toolbar1Custom;
            }

            //Add CSS includes if provided
            if(cssIncludes) {
                if($.isArray(cssIncludes)){
                    cssIncludes.push("/theme/website/szschool/css/content.css");
                    cssIncludes.push("https://www.heath.derbyshire.sch.uk/_admin/cms/szschool/account-setting-colours.css");
                    cssIncludes.push("/theme/website/szschool/css/font-awesome.min.css");

                }
                settings.content_css = cssIncludes;

            }else{
                var cssIncludesDefault = ["/theme/website/szschool/css/content.css", "https://www.heath.derbyshire.sch.uk/_admin/cms/szschool/account-setting-colours.css", "/theme/website/szschool/css/font-awesome.min.css"];
                settings.content_css = cssIncludesDefault;
            }

            //If newsletter editor...
            if(isNewsletter) {
                settings.width = "100%";
                settings.resize = true;
                //settings.force_br_newlines = true;
                //settings.force_p_newlines = false;
                settings.forced_root_block = '';
            }

            if(typeof relativeUrls == 'undefined' || relativeUrls == false) {
                settings.relative_urls = false;
                settings.convert_urls = false;
            }

            if (wildcards) {
                settings.wildcards = wildcards;
                settings.wildcardAddons = wildcardSettings;
            }

            settings.is_user_admin = 0;

//            tinymce.execCommand('mceFocus', false, id);
            tinymce.execCommand('mceRemoveEditor', true, id);
            tinymce.init(settings);

        }
    }
</script>



<div id="lightboxOverlay" class="lightboxOverlay" style="display: none;"></div><div id="lightbox" class="lightbox" style="display: none;"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" alt="Lightbox Image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="><div class="lb-nav"><a class="lb-prev" name="Previous" href=""><span>Previous</span></a><a class="lb-next" name="Next" href=""><span>Next</span></a></div><div class="lb-loader"><a class="lb-cancel" name="Cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close" name="Close"></a></div></div></div></div><div style="background-color: rgb(255, 255, 255); border: 1px solid rgb(204, 204, 204); box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 3px; position: absolute; transition: visibility linear 0.3s, opacity 0.3s linear; opacity: 0; visibility: hidden; z-index: 2000000000; left: 0px; top: -10000px;"><div style="width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; z-index: 2000000000; background-color: rgb(255, 255, 255); opacity: 0.05;"></div><div class="g-recaptcha-bubble-arrow" style="border: 11px solid transparent; width: 0px; height: 0px; position: absolute; pointer-events: none; margin-top: -11px; z-index: 2000000000;"></div><div class="g-recaptcha-bubble-arrow" style="border: 10px solid transparent; width: 0px; height: 0px; position: absolute; pointer-events: none; margin-top: -10px; z-index: 2000000000;"></div><div style="z-index: 2000000000; position: relative;"><iframe title="recaptcha challenge expires in two minutes" name="c-c0f2reqzvtrp" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/bframe?hl=en&amp;v=jdMmXeCQEkPbnFDy9T04NbgJ&amp;k=6LeZNsoZAAAAAC_atze0mLyfoGUm4ICz_xBWIl7d&amp;bft=0dAFcWeA7FXQ6WCTaFda6u5-0giVJ_KVkbAnq3eIotHyR5qUJXakzxl7-X7hytbTBJZKpbEUk7tteWNC26JO2d2AZD818cbG16FQ" style="width: 100%; height: 100%;"></iframe></div></div>\` }} />
      <Script src="/assets/js/tinymce.min.js" strategy="afterInteractive" key="/assets/js/tinymce.min.js" />
      <Script src="/assets/js/tinymcefunctions.js" strategy="afterInteractive" key="/assets/js/tinymcefunctions.js" />
      <Script src="https://www.google.com/recaptcha/api.js" strategy="afterInteractive" key="https://www.google.com/recaptcha/api.js" />
      
      <Script src="/assets/js/plugins.js" strategy="afterInteractive" key="/assets/js/plugins.js" />
      <Script src="/assets/js/bs-switches.js" strategy="afterInteractive" key="/assets/js/bs-switches.js" />
      {/* External canvas/functions.js removed - using local /assets/js/functions.js instead via ScriptsLoader */}
      <Script src="/website/custom.js?skin_id=" strategy="afterInteractive" key="/website/custom.js?skin_id=" />
      <Script src="/assets/js/tinymce.min.js" strategy="afterInteractive" key="/assets/js/tinymce.min.js" />
      <Script id="inline-0" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: \`
    if(window.location.pathname=='' || window.location.pathname=='/') {
        window.location = '/latest';
    }
\` }} />
      <Script id="inline-1" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: \`
    function LoteCfForm() {

    }

    LoteCfForm.prototype.getCfValues = function (formData, cfArrayName) {
        const promises = $(".custom_field_edit").map(function (i, e) {
            if (LoteCfForm.prototype.isInVisibleGroup(e)) {
                var f = $(e).data('function');
                if (f && typeof LoteCfForm.prototype[f] == 'function') {
                    return LoteCfForm.prototype[f](formData, e, cfArrayName);
                }
            }
        });

        return Promise.all(promises);
    };

    LoteCfForm.prototype.isInVisibleGroup = function (e) {
        return ! $(".custom_group_edit[data-value='" + $(e).data('group') + "']").hasClass("group_disabled");;
    };

    LoteCfForm.prototype.getTextValue = function (formData, e, cfArrayName) {
        formData[cfArrayName][$(e).attr("data-id")] = $(e).val();
    };

    LoteCfForm.prototype.getWysiwygValue = function (formData, e, cfArrayName) {
        formData[cfArrayName][$(e).attr("data-id")] = getWysiwygValue($(e).attr("id"));
    };

    LoteCfForm.prototype.getDateTimeValue = function (formData, e, cfArrayName) {
        var id = $(e).attr('id');
        var element = $('#' + id + '_time');
        var time = timepickiConvert(element);

        var value = null;
        var date = $('#' + id + '_date_alt').val();
        if (date && time) {
            value = date + ' ' + time;
        }
        else if (date) {
            value = date;
        }
        else if (time) {
            value = time;
        }
        formData[cfArrayName][$(e).attr("data-id")] = value;
    };

    LoteCfForm.prototype.getDateValue = function (formData, e, cfArrayName) {
        var id = $(e).attr('id');
        formData[cfArrayName][$(e).attr("data-id")] = $('#' + id + '_date_alt').val();
    };

    LoteCfForm.prototype.getTimeValue = function (formData, e, cfArrayName) {
        var id = $(e).attr('id');
        var element = $('#' + id + '_time');
        var time = timepickiConvert(element);

        formData[cfArrayName][$(e).attr("data-id")] = time;
    };

    LoteCfForm.prototype.getCheckboxValues = function (formData, e, cfArrayName) {
        var id = $(e).data('id');
        var counter = 0;
        var values = [];
        $(e.form).find('input[name="checkbox_' + id + '"]').each(function (i, el) {
            if ($(el).is(":checked")) {
                values[counter] = $(el).val();
                counter++;
            }
        });
        if (values.length === 0) {
            values = "";
        }
        formData[cfArrayName][$(e).attr("data-id")] = values;
    };

    LoteCfForm.prototype.getRadioValue = function (formData, e, cfArrayName) {
        var id = $(e).attr('id');
        var baseObj = [];
        $.each($(e).find('input[type="radio"]'), function (index, item) {
            var obj = {};
            if ($(item).is(':checked')) {
                obj['id'] = $(item).val();

                var itemValid = true;
                if ($(item).val() == 0 && $('#cf_field_edit_radio_' + $(e).data('id') + '_custom').is(':visible')) {
                    var customInput = $('#cf_field_edit_radio_' + $(e).data('id') + '_custom').val();
                    obj['value'] = customInput;
                    itemValid = customInput !== '';
                } else {
                    obj['value'] = $(item).data('value');
                }

                if (itemValid) {
                    baseObj.push(obj);
                }
            }
        });
        formData[cfArrayName][$(e).attr("data-id")] = '';
        if (baseObj.length > 0) {
            formData[cfArrayName][$(e).attr("data-id")] = JSON.stringify(baseObj);
        }
    };

    LoteCfForm.prototype.getMatrixValues = function (formData, e, cfArrayName) {
        if (typeof(formData[cfArrayName][$(e).attr("data-default")]) == 'undefined') {
            formData[cfArrayName][$(e).attr("data-default")] = {};
        }
        formData[cfArrayName][$(e).attr("data-default")][$(e).attr("data-id")] = $(e).val();
    };

    LoteCfForm.prototype.getRecaptchaValue = function (formData, e, cfArrayName) {
        formData[cfArrayName][$(e).attr("data-id")] = grecaptcha.getResponse();
    };

    LoteCfForm.prototype.getFileValues = function (formData, e, cfArrayName) {
        return new Promise((resolve, reject) => {
            var file = e.files[0];
            if (!file) {
                return resolve();
            }
            var r = new FileReader();

            r.onload = function(read) {
                var contents = read.target.result;
                var attr = $(e).attr("data-id")
                formData[cfArrayName][attr] = contents;
                resolve();
            }

            r.readAsDataURL(file)
        })
    };

    LoteCfForm.prototype.getCheckedValues = function (formData, e, cfArrayName) {
        var name = $(e).data('name');
        var counter = 0;
        var values = [];
        $(e).find('input[name="' + name + '"]').each(function (i, el) {
            if ($(el).is(":checked")) {
                values[counter] = $(this).val();
                counter++;
            }
        });
        formData[cfArrayName][$(e).attr("data-id")] = values;
    };

    LoteCfForm.prototype.getOptionValue = function (formData, e, cfArrayName) {
        var id = $(e).attr('id');
        var obj = {
            id: $(e).val()
        };

        if ($(e).val() == 0 && $('#' + id + '_custom').is(':visible')) {
            obj['value'] = $('#' + id + '_custom').val();
        } else if ($(e).val() !== '') {
            obj['value'] = $(e).find(':selected').data('value');
        }

        formData[cfArrayName][$(e).attr("data-id")] = '';
        if (obj.value !== undefined) {
            formData[cfArrayName][$(e).attr("data-id")] = JSON.stringify([obj]);
        }
    };

    LoteCfForm.prototype.getOptionMultiValue = function (formData, e, cfArrayName) {
        var id = $(e).attr('id');
        var baseObj = [];
        if ($(e).val() !== null) {
            $.each($(e).val(), function (index, itemId) {
                var obj = {
                    id: itemId,
                    value: ''
                };

                var itemValid = true;
                if (itemId == 0 && $('#' + id + "_custom").is(':visible')) {
                    var customInput = $('#' + id + "_custom").val();
                    obj['value'] = customInput;
                    itemValid = customInput !== '';
                } else {
                    obj['value'] = $('#' + id + '_option_' + itemId).data('value');
                }

                if (itemValid) {
                    baseObj.push(obj);
                }
            });
        }

        formData[cfArrayName][$(e).attr("data-id")] = '';
        if (baseObj.length > 0) {
            formData[cfArrayName][$(e).attr("data-id")] = JSON.stringify(baseObj);
        }
    };

    var customBaseObjectRemove = [];

    LoteCfForm.prototype.getMultiCheckboxValue = function (formData, e, cfArrayName) {
        var baseObj = [];
        $.each($(e).find('input[type="checkbox"]'), function (index, item) {
            var obj = {};
            if ($(item).is(':checked')) {
                obj['id'] = $(item).val();

                var itemValid = true;
                var cfField = $('#cf_field_edit_' + $(e).data('id') + '_custom');
                if ($(item).val() === 0 && cfField.is(':visible')) {
                    var customInput = cfField.val();
                    obj['value'] = customInput;
                    itemValid = customInput !== '';
                } else {
                    obj['value'] = $(item).data('value');
                }

                if (itemValid) {
                    baseObj.push(obj);
                }
            } else {
                obj['id'] = $(item).data('id');
                customBaseObjectRemove.push(obj);
            }

        });
        if (baseObj.length > 0) {
            formData[cfArrayName][$(e).attr("data-id")] = JSON.stringify(baseObj);
        }
        if (baseObj.length === 0 && customBaseObjectRemove.length > 0) {
            console.log("Remove object", e);
            formData['_custom_remove'] = JSON.stringify(customBaseObjectRemove);
        }
    };

    function loteCfEditBeforeSerialise(parentForm)
    {
        var f = new LoteCfForm();
        f.beforeCfSerialise(parentForm);
    }

    function loteCfEditBeforeSubmit(parentForm)
    {
        var f = new LoteCfForm();
        return f.beforeCfSubmit(parentForm);
    }

    async function getLoteCfEditValues(formData, cfArrayName, parentForm) {
        formData[cfArrayName] = {};
        var f = new LoteCfForm();
        if (parentForm) {
            await f.getFormCfValues(formData, cfArrayName, parentForm);
        }
        else {
            await f.getCfValues(formData, cfArrayName);
        }
        return formData;
    }


    LoteCfForm.prototype.getFormCfValues = function (formData, cfArrayName, parentForm) {
        $(parentForm).find(".custom_field_edit").each(function (i, e) {
            var f = $(e).data('function');
            if (f && typeof LoteCfForm.prototype[f] == 'function') {
                LoteCfForm.prototype[f](formData, e, cfArrayName);
            }
        });
    };


    LoteCfForm.prototype.beforeCfSerialise = function (parentForm) {
        $(parentForm).find(".custom_field_edit").each(function (i, e) {
            var f = $(e).data('serialise-function');
            if (f && typeof LoteCfForm.prototype[f] == 'function') {
                LoteCfForm.prototype[f](parentForm, e);
            }
        });
    };

    LoteCfForm.prototype.beforeCfSubmit = function (parentForm) {
        var fields = [];
        var emptyFields = [];
        $(parentForm).find('input[type="radio"].custom_field_edit.required').each(function (i, e) {
            if($(e).is(':checked')) {
                fields[$(e).attr('name')] = 'required';
            }
        });
        $(parentForm).find('input[type="radio"].custom_field_edit.required').each(function (i, e) {
            if($(e).is(':checked')) {

            } else {
                if($(e).attr('name') != undefined && fields[$(e).attr('name')] == undefined) emptyFields[$(e).attr('name')] = 'required';
            }
        });
        setCfErrors(emptyFields, parentForm);
        if(emptyFields.length > 0) {
            $('.form_buttons').show();
            $('.form_processing').hide();
            return false;
        }
    };

    LoteCfForm.prototype.beforeCfSerialisePublicGroup = function (formData, e, cfArrayName) {
        var name = $(e).data('name');
        var publicGroups = {};
        $(e).parent().find('input[data-key="' + name + '"]').each(function (i, el) {
            if($(el).is(":checked")){
                publicGroups[$(el).attr("data-value")] = "1";
            }
            else {
                publicGroups[$(el).attr("data-value")] = "0";
            }
        });
        $(e).val(JSON.stringify(publicGroups));
    };

    LoteCfForm.prototype.beforeCfSerialiseMediaFile = function (formData, e, cfArrayName) {
        var container = jQuery(e).closest('.media_field_container');
        var numInProgress = jQuery('li.qq-in-progress', container).length;
        if(numInProgress > 0) {
            jQuery(e).val("in-progress");
        } else {
            jQuery(e).val(jQuery(e).attr('data-media-files'));
        }
    };

    LoteCfForm.prototype.beforeCfSerialiseMatrix = function (formData, e, cfArrayName) {
        var values = {};
        var id = $(e).data('id');
        var matrixType = $(e).data('matrix-type');
        if(matrixType=="radio" || matrixType=="checkbox") {
            $(e.form).find('input[data-id="matrix_'+matrixType+'_' + id + '"]').each(function (i, el) {
                if ($(el).is(":checked")) {
                    if(typeof(values[$(el).data("matrix-row")]) == 'undefined') {
                        values[$(el).data("matrix-row")] = {};
                    }
                    values[$(el).data("matrix-row")][$(el).data("matrix-column")] = 1;
                }
            });
        }
        else {
            $(e.form).find('input[data-id="matrix_text_' + id + '"]').each(function (i, el) {
                if($(el).val()) {
                    if(typeof(values[$(el).data("matrix-row")]) == 'undefined') {
                        values[$(el).data("matrix-row")] = {};
                    }
                    values[$(el).data("matrix-row")][$(el).data("matrix-column")] = $(el).val();
                }
            });
        }
        $(e).val(JSON.stringify(values));
    };

    LoteCfForm.prototype.beforeCfSerialiseRecaptcha = function (parentForm, e) {
        var dataElement = $('#' + $(e).data('id'));
        $(dataElement).val(grecaptcha.getResponse());
    };

    LoteCfForm.prototype.beforeCfSerialiseDate = function (parentForm, e) {
        var id = $(e).attr('id');
        $(e).val($('#' + id + '_date_alt').val());
    };

    LoteCfForm.prototype.beforeCfSerialiseTime = function (parentForm, e) {
        var id = $(e).attr('id');
        var element = $('#' + id + '_time');
        var time = timepickiConvert(element);
        $(e).val(time);
    };

    LoteCfForm.prototype.beforeCfSerialiseDateTime = function (formData, e, cfArrayName) {
        var id = $(e).attr('id');
        var element = $('#' + id + '_time');
        var time = timepickiConvert(element);

        var value = null;
        var date = $('#' + id + '_date_alt').val();
        if (date && time) {
            value = date + ' ' + time;
        }
        else if (date) {
            value = date;
        }
        else if (time) {
            value = time;
        }
        $(e).val(value);
    };
    LoteCfForm.prototype.beforeCfSerialiseSignature = function (formData, e, cfArrayName) {

    };

    LoteCfForm.prototype.beforeCfSerialiseMultiSelect = function (parentForm, e) {
        var id = $(e).attr('id');
        var baseObj = [];
        if ($(e).val() !== null) {
            $.each($(e).val(), function (index, itemId) {
                var obj = {
                    id: itemId,
                    value: ''
                };

                var itemValid = true;
                if (itemId == 0 && $('#' + id + "_custom").is(':visible')) {
                    var customInput = $('#' + id + "_custom").val();
                    obj['value'] = customInput;
                    itemValid = customInput !== '';
                } else {
                    obj['value'] = $('#' + id + '_option_' + itemId).data('value');
                }

                if (itemValid) {
                    baseObj.push(obj);
                }
            });
        }

        var dataField = $(parentForm).find("input[name='"+$(e).data('id')+"']");
        if (baseObj.length > 0) {
            dataField.val(JSON.stringify(baseObj));
        }
    };


    LoteCfForm.prototype.beforeCfSerialiseCheckBox = function (parentForm, e) {
        var id = $(e).attr('id');
        var dataField = $(parentForm).find("input[name='" + $(e).data('id') + "']");
        var baseObj = [];
        $.each($(e).find('input[type="checkbox"]'), function (index, item) {
            var obj = {};
            if ($(item).is(':checked')) {
                obj['id'] = $(item).val();

                var itemValid = true;
                if ($(item).val() == 0 && $('#cf_field_edit_' + $(e).data('id') + '_custom').is(':visible')) {
                    var customInput = $('#cf_field_edit_' + $(e).data('id') + '_custom').val();
                    obj['value'] = customInput;
                    itemValid = customInput !== '';
                } else {
                    obj['value'] = $(item).data('value');
                }

                if (itemValid) {
                    baseObj.push(obj);
                }
            }
        });
        if (baseObj.length > 0) {
            dataField.val(JSON.stringify(baseObj));
        }
    };


    LoteCfForm.prototype.beforeCfSerialiseRadioButton = function (parentForm, e) {
        var id = $(e).attr('id');
        var dataField = $(parentForm).find("input[name='" + $(e).data('id') + "']");
        var baseObj = [];
        $.each($(e).find('input[type="radio"]'), function (index, item) {
            var obj = {};
            if ($(item).is(':checked')) {
                obj['id'] = $(item).val();

                var itemValid = true;
                if ($(item).val() == 0 && $('#cf_field_edit_radio_' + $(e).data('id') + '_custom').is(':visible')) {
                    var customInput = $('#cf_field_edit_radio_' + $(e).data('id') + '_custom').val();
                    obj['value'] = customInput;
                    itemValid = customInput !== '';
                } else {
                    obj['value'] = $(item).data('value');
                }

                if (itemValid) {
                    baseObj.push(obj);
                }
            }
        });
        if (baseObj.length > 0) {
            dataField.val(JSON.stringify(baseObj));
        } else {
            dataField.val("");
        }
    };


    LoteCfForm.prototype.beforeCfSerialiseSingleSelect = function (parentForm, e) {
        var id = $(e).attr('id');
        var dataField = $(parentForm).find("input[name='"+$(e).data('id')+"']");
        var obj = {
            id: $(e).val()
        };

        var itemValid = true;
        if ($(e).val() == '0' && $('#' + id + '_custom').is(':visible')) {
            var customInput = $('#' + id + '_custom').val();
            obj['value'] = customInput;
            itemValid = customInput !== '';
        } else if ($(e).val() !== '') {
            obj['value'] = $(e).find(':selected').data('value');
        } else {
            itemValid = false;
        }

        var baseObj = [obj];

        if (itemValid) {
            dataField.val(JSON.stringify(baseObj));
        }
    };





    function setCfErrors(errors, form) {
        for (var f in errors) {
            if (form) {
                var htmlError = document.createElement('div');
                htmlError.textContent = 'There are errors within your form. Please check that all your mandatory fields are completed.';
                htmlError.setAttribute('class','errorDiv');

                $(form).find('#cf_field_edit_error_' + f).html(errors[f]).closest('.fwrp').addClass('fer');
                if ($('div.errorDiv').length) {

                } else {
                    $(form).find('.form_buttons').prepend(htmlError);
                }
            }
            else {
                $('#cf_field_edit_error_' + f).html(errors[f]).closest('.fwrp').addClass('fer');
            }
        }

    }

    function setFormProcessing(form, isProcessing, isBack) {
        if (isProcessing) {
            if(isBack){
                $(form).addClass("is-processing-back");
            }
            else{
                $(form).find('input[type="submit"], button[type="submit"]').prop('disabled', true).addClass("loading");
                $(form).addClass("is-processing");
            }
        }
        else {
            if(isBack){
                $(form).removeClass("is-processing-back");
            }
            else{
                $(form).find('input[type="submit"], button[type="submit"]').prop('disabled', false).removeClass("loading");
                $(form).removeClass("is-processing");
            }
        }
    }

    $(function() {
        $('.only_one_radio').off().on('click', function() {
            $('.only_one_radio').prop('checked', false);
            $(this).prop('checked', true);
        });
    });


\` }} />
      <Script id="inline-2" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: \`

    function setupFormButtons(formId, recordId, nextPage, prevPage, formInstance)
    {
        setupPrevButton(formId, recordId, prevPage, formInstance);
        setupFormSubmit(formId, recordId, nextPage, formInstance);
        $('#lote_form_'+formId+' .lote_form_main button[type=submit], .lote_form_main input[type=button]').off().on('click', function(e) {
            e.preventDefault();
            var thisForm = $("#lote_form_"+formId);
            /*
            $('#lote_form_'+formId+' .form_buttons .btn').addClass('greyed_out');
            $('#lote_form_'+formId+' .form_buttons .btn').prop('disabled', true);
            $(this).addClass('loading');
            */
            if(typeof(formInstance) != 'undefined' && formInstance != '') {
                thisForm = $("[id='lote_form_"+formId+"'][data-form-instance='"+formInstance+"']");
            }
            if($(this).hasClass("form_prev_button_"+formId)) {
                goToFormPage(formId, recordId, prevPage, true);
            } else {
                thisForm.submit();
            }
        });
    }

    function setupPrevButton(formId, recordId, prevPage, formInstance)
    {
        setupProgressClick(formId, recordId);
    }

    function setupFormSubmit(formId, recordId, nextPage, formInstance)
    {
        var thisForm = $("#lote_form_"+formId);
        if(typeof(formInstance) != 'undefined' && formInstance != '') {
            thisForm = $("[id='lote_form_"+formId+"'][data-form-instance='"+formInstance+"']");
        }
        var options = {
            url: 'https://www.heath.derbyshire.sch.uk/form/submit.json',
            dataType : "json",
            type: "POST",
            data : { submit_url : window.location.href, group_id : $(thisForm).find(".group_id").val(), '_lote_form_module' : '1' },
            success:    function(json) {
                clearFormErrors();
                if (json.success) {
                    if(json.completed) {
                        completeForm(thisForm, formId, json.record_id, formInstance, json);
                    }
                    else {
                        goToFormPage(formId, json.record_id, json.next_page, false);
                    }
                }
                else if(json.error) {
                    setFormProcessing(thisForm, false);
                    alert(json.error);
                }
                else {
                    $('#lote_form_'+formId+' .form_buttons .btn').removeClass('greyed_out');
                    $('#lote_form_'+formId+' .form_buttons .btn').removeClass('loading');
                    $('#lote_form_'+formId+' .form_buttons .btn').prop('disabled', false);
                    setCfErrors(json.errors, thisForm);
                    setAdditionalFormErrors(json.additional_form_errors);
                    setFormProcessing(thisForm, false);
                }
                var fName = "onLoteFormSubmitCallback"+formId;
                if (typeof window[fName] === "function") {
                    window[fName](formId, thisForm, json);
                }
            },
            error: function (request, status, error) {
                if (request.status) {
                    alert('Error: ' + request.status + '\\n' + request.statusText);
                }
                setFormProcessing(thisForm, false);
            },
            beforeSerialize: function($form, options) {
                loteCfEditBeforeSerialise(thisForm);
            },
            beforeSubmit: function(formData, jqForm, options) {
                var fName = "getAdditionalFormData"+formInstance;
                if (typeof window[fName] === "function") {
                    window[fName](formData);
                }
                setFormProcessing(thisForm, true);
                return loteCfEditBeforeSubmit(thisForm);
            }

        };
        $(thisForm).ajaxForm(options);
    }

    function setAdditionalFormErrors(additionalFormErrors)
    {
        for(formErrors in additionalFormErrors) {
            for (var f in additionalFormErrors[formErrors]) {
                $('#' + f + '_error').html(additionalFormErrors[formErrors][f][0]).parent().addClass('fer');
            }
        }

    }


    function setupProgressClick(formId, recordId) {

        $('#save_progress').off('click').on('click', function() {
            var form = $("#lote_form_"+formId);
            var formData = {} ;
            getLoteCfEditValues(formData,'_fields', $(this).parents());

            formData['id'] = formId;
            formData['submit_url'] = window.location.href;
            formData['group_id'] = $(form).find(".group_id").val();
            formData['record_id'] = $(form).find("#record_id").val();
            formData['current_page'] = $(form).find("#group_id").val();

            $.ajax({
                url: 'https://www.heath.derbyshire.sch.uk/form/saveprogress.json',
                method: 'POST',
                data: formData,
                success: function (json) {
                    clearFormErrors();
                    if (json.success) {
                        $('#record_id').val(json.record_id);
                        alert('Progress Saved');
                    } else if(json.error) {
                        alert(json.error);
                    }
                },
                error: function (request, status, error) {
                    if (request.status) {
                        alert('Error: ' + request.status + '\\n' + request.statusText);
                    }
                }
            });

            return false;
        });
    }


    function clearFormErrors() {
        $('.fermsg').html('');
        $('.fwrp').removeClass("fer");
        $('.errorDiv').remove();
    }

    function completeForm(form, formId, recordId, formInstance, rawJsonResponse) {
        
        var customCallbackName = 'onLoteFormCompletedCallback'+formId;

        if (typeof(callback) != 'undefined' && typeof window[callback] === "function") {
            window[callback](formId, recordId);
        }
        else if (typeof window[customCallbackName] === "function") {
            window[customCallbackName](formId, recordId);
        } else if (rawJsonResponse.redirect_url !== undefined) {
            window.location = rawJsonResponse.redirect_url;
        } else {
                        var form = $("#lote_form_"+formId);
            if(typeof(formInstance) != 'undefined' && formInstance != '') {
                var form = $("[id='lote_form_"+formId+"'][data-form-instance='"+formInstance+"']");
            }
            var formData = {} ;
            getLoteCfEditValues(formData,'_fields', form);
            formData['id'] = formId;
            formData['submit_url'] = window.location.href;
            formData['group_id'] = $(form).find(".group_id").val();
            formData['record_id'] = recordId;
            formData['current_page'] = $(form).find("#group_id").val();

            $.ajax({
                url: 'https://www.heath.derbyshire.sch.uk/form/confirmation/2.shtml',
                method: 'POST',
                data : formData,
                success: function (html) {
                    $('.lote_form_completed', form).html(html);
                },
                error: function (request, status, error) {
                    if (request.status) {
                        alert('Error: ' + request.status + '\\n' + request.statusText);
                    }
                }
            });
                        $(form).find(".lote_form_main").hide();
            $(form).parent().find(".lote_form_completed").show();
            $('html, body').animate({
                scrollTop:  $(form).parent().offset().top - 200
            }, 500);
            var thisForm = $("#lote_form_"+formId);
            setFormProcessing(thisForm, false);

        }
    }

    function goToFormPage(formId, recordId, page, isBack) {
        var thisForm = $("#lote_form_"+formId);
        if(isBack){
            setFormProcessing(thisForm, true, true);
        }
        $.get( "https://www.heath.derbyshire.sch.uk/form/page/" + formId + "/" + page + "/" + recordId + ".shtml", function( data ) {
            var loteForm = $("#lote_form_" + formId);
            loteForm.find('.lote_form_main').html(data);
            if(isBack){
                setFormProcessing(thisForm, false, true);
            }
            else{
                setFormProcessing(thisForm, false);
            }

            $('html, body').animate({
                scrollTop: Math.max(loteForm.offset().top - 150, 0)
            }, 350);


        });
    }


\` }} />
      <Script id="inline-3" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: \`
    $(function(){
        setupFormButtons('2', '', '', '', '');

		    });
\` }} />
      <Script id="inline-4" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: \`

                    jQuery('.sz-gallery').each(function() {
                        var array = jQuery(this).attr('data-parameters').split(',');
                        var parameters = {};

                        jQuery.each(array, function(key, value) {
                            var split = value.split(':');

                            if (!isNaN(Number(split[1]))) {
                                split[1] = Number(split[1]);
                            } else if (split[1] === "true" || split[1] === "false") {
                                split[1] = (split[1] === "true");
                            } else {
                                split[1] = String(split[1]);
                            }
                            parameters[split[0]] = split[1];
                        });

                        jQuery(this).unitegallery(parameters);
                        jQuery(this).show();
                    });
                    $('.read-more-item').each(function(){
                        var firstPara = $(this).find('p:first').html();
                        $(this).parent().prepend('<p class="articleSummary">' + firstPara.substring(0,500) + '...</p>');
                    });
                }
			})


	}

	$(function(){

        $('.tags_checked').off('change').on("change", function () {
           executeSearch();
           console.log('Tags Checked');
        });


		$("#search_phrase").keypress(function (e) {
			if(e.which == 13) { // the enter key code
				executeSearch();
                console.log('Search Phase');
			}
		});

        $("#search_clear").click(function(){
            $("#search_phrase").val("");
            executeSearch();
            console.log('Search Clear');
        });

        $('.clearTags').on('click', function(){
            $('.tagwrp input:radio').prop("checked", false);
            executeSearch();
            console.log('Uncheck');
        });
        $('.clearSideTags').on('click', function(){
            $('aside.sidebar input:radio').prop("checked", false);
            $('#clearButton').addClass('grey');
            executeSearch();
        });
         $('aside.sidebar label.radio-style-1-label').on('click', function(){
            $('#clearButton').removeClass('grey');
         });

         $(document).on('click', '.event-tag, .article-tag', function () {
             $('input.tags_checked[id="radio-' + $(this).attr('id') + '"]').prop('checked', true);
             executeSearch();
         });
	});

\` }} />
      <Script id="inline-6" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: \`
    var actualCaretPositionBookmark;
\` }} />
      <Script id="inline-7" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: \`
	function setWysiwygValue(id, value) {
		tinymce.get(id).setContent(value);
	}
    function getWysiwygValue(id) {
        return tinyMCE.get(id).getContent();
    }
	function getWysiwygValuePlainText(id) {
		return tinyMCE.get(id).getContent({ format: 'text' });
	}
	function insertIntoWysiwyg(value, id) {
        if(actualCaretPositionBookmark != undefined) tinyMCE.activeEditor.selection.moveToBookmark(actualCaretPositionBookmark);
//        console.log(tinyMCE.activeEditor);
//        //tinyMCE.setActive(id);
//        tinyMCE.activeEditor.id = id;
//        console.log(tinyMCE.activeEditor.id);
//        tinyMCE.execCommand('mceFocus',false,'#'+id);
        tinyMCE.activeEditor.execCommand('mceInsertContent', false, ' ' + value + ' ');
	}
	function setUpTextEditor(id, isFullPage, toolbar1Custom, cssIncludes, isNewsletter, profile, relativeUrls) {

		var plugins = [
			"linkfrontend spellchecker link image external responsivefilemanager jbimages custom email phone sb_url"
		];

		var menubar = false;
		var height = "400px";
		if($('#'+id).data('tinymce-height') != undefined) {
			height = $('#'+id).data('tinymce-height');
		}
		toolbarOptions = "   link | styleselect |  bold italic underline bullist numlist | spellchecker | removeformat  ";
		if($('#'+id).siblings('div.mce-tinymce').length == 0) {

			var settings = {
                branding: false,
				selector: '#' + id,
				width: "auto",
				height: height,
				statusbar: true,
				resize: "both",
				theme: "modern",
				valid_elements: "*[*]",
				extended_valid_elements: "*[*]",
                valid_children : "multiline[a],singleline[a]",
				plugins: plugins,
				menubar: menubar,
				cleanup: false,
				verify_html: false,
                toolbar: toolbarOptions,
				image_advtab: true,
				contextmenu: "link image inserttable | cell row column deletetable",
				external_filemanager_path: "https://www.heath.derbyshire.sch.uk/theme/_admin/bluetree/js/tinymce/js/filemanager/",
				filemanager_title: "File Manager",
				external_plugins: {"filemanager": "https://www.heath.derbyshire.sch.uk/theme/_admin/bluetree/js/tinymce/js/filemanager/plugin.js"},
				image_list: [],
                paste_preprocess: function (plugin, args) {

					args.content += '';
				},
				setup: function (editor) {
                    editor.on("keyup", function (editor, e) {
                        actualCaretPositionBookmark = tinyMCE.activeEditor.selection.getBookmark(2, true);
                    });
                    editor.on("click", function (editor, e) {
                        actualCaretPositionBookmark = tinyMCE.activeEditor.selection.getBookmark(2, true);
                    });
					editor.on('getContent', function (e) {

                        if (e.content.indexOf("<a") >= 0) {
                            var data = e.content;
                            var hrefArr = [];
                            $(data).find("a").each(function () {
                                var attr = $(this).attr('lote_id');
                                if (typeof attr !== typeof undefined && attr !== false && $.isNumeric(attr)) {
                                    var text = $(this).text();
                                    e.content = e.content.replace(text+"</a>", text+'</lotelink>');
                                }
                            });
                            e.content = e.content.replace(/\\<a type="page"/g, '<lotelink type="page"');
                            e.content = e.content.replace(/\\<a type="file"/g, '<lotelink type="file"');
                            var data = e.content;
                            $(data).find("a").each(function () {
                                var attr = $(this).attr('lote_id');
                                if (typeof attr !== typeof undefined && attr !== false && $.isNumeric(attr)) {
                                    var text = $(this).attr('href');
                                    e.content = e.content.replace('<a href="'+text+'"', '<lotelink href="'+text+'"');
                                }
                            });
                            var data = e.content;
                            $(data).find("a").each(function () {
                                var attr = $(this).attr('lote_id');
                                if (typeof attr !== typeof undefined && attr !== false && $.isNumeric(attr)) {
                                    e.content = e.content.replace('<a lote_id="'+attr+'"', '<lotelink lote_id="'+attr+'"');
                                }
                            });
                        }
					});
                    editor.on('paste', function (e) {
                        var paste;
                        if (e.clipboardData.types.indexOf('text/plain') >= 0) {
                            paste = e.clipboardData.getData('text/plain');
                        }

                        if (e.clipboardData.types.indexOf('text/html') >= 0) {
                            var tempPaste = e.clipboardData.getData('text/html');
                            if (tempPaste.includes('')) { // check if the content is a special type such as actual html, image or file
                                var regex = new RegExp("([^]*)|([^]*)", "g"); // tinymce copy includes full html and body tags, and the actual content is actually between the comments
                                paste = tempPaste.replace(regex, '');
                            }
                        }

                        if (paste !== undefined) {
                            paste = paste.replace(/<script[^]*<\\/script>/g, ''); // replaces everything in-between and including (<scrip -- <\\script>)
                            e.preventDefault();
                            insertIntoWysiwyg(paste);
                        }
                    });
					editor.on('paste_preprocess', function (e) {
						console.log('paste_preprocess', e.content);
					});
					editor.on('beforeSetContent', function (e) {
                        e.content = e.content.replace(/<p>(<a[^<]*(<img[^<]*)<\\/a>)<\\/p>/gi, function (a) {
                            return a.replace('<p>', '').replace('</p>', '');
                        });
						if (e.content.indexOf("<lotelink") >= 0) {

                            var data = e.content;
                            $(data).find("lotelink").each(function () {
                                var attr = $(this).attr('lote_id');
                                if (typeof attr !== typeof undefined && attr !== false && $.isNumeric(attr)) {
                                    var text = $(this).attr('href');
                                    e.content = e.content.replace('<lotelink href="'+text+'"', '<a href="'+text+'"');
                                }

                            });

                            var data = e.content;
                            $(data).find("lotelink").each(function () {
                                var attr = $(this).attr('lote_id');
                                if (typeof attr !== typeof undefined && attr !== false && $.isNumeric(attr)) {
                                    e.content = e.content.replace('<lotelink lote_id="'+attr+'"', '<a lote_id="'+attr+'"');
                                }

                            });

							e.content = e.content.replace(/\\<lotelink type="img"/g, '<img');
							e.content = e.content.replace(/\\<lotelink type="page"/g, '<a type="page"');
							e.content = e.content.replace(/\\<lotelink type="file"/g, '<a type="file"');
                            e.content = e.content.replace(/\\<\\/lotelink>/g, '</a>');

						}

					});
				},
                spellchecker_language: "en_GB",
                spellchecker_rpc_url: 'spellchecker.php',
                link_formats: ["Link To URL", "Link To Email", "Link To Phone"],
                is_campaign: (profile !== undefined && profile === "campaign"),
                sz_profile: profile
			};

            if(typeof(toolbar) != 'undefined') {
                settings.toolbar1 = toolbar1Custom;
            }

            //Add CSS includes if provided
            if(cssIncludes) {
                settings.content_css = cssIncludes;
            }

            //If newsletter editor...
            if(isNewsletter) {
                settings.width = "800px";
                settings.resize = true;
            }

            if(typeof relativeUrls == 'undefined' || relativeUrls == false) {
                settings.relative_urls = false;
                settings.convert_urls = false;
            }

			tinymce.init(settings);
		}
	}

    function setUpTextEditorFrontEnd(id, isFullPage, toolbar1Custom, cssIncludes, isNewsletter, profile, relativeUrls) {

        var plugins = [
            "sb_links paste spellchecker textcolor sb_images sb_filemanager sb_table lists"
        ];

        var menubar = false;
        var height = "400px";
        if($('#'+id).data('tinymce-height') != undefined) {
            height = $('#'+id).data('tinymce-height');
        }
        toolbarOptions = "sb_links | sb_images | table |styleselect |  fontsizeselect forecolor | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | removeformat  ";
        if($('#'+id).siblings('div.mce-tinymce').length == 0) {

            var settings = {
                branding: false,
                selector: '#' + id,
                width: "auto",
                height: height,
                statusbar: true,
                paste_auto_cleanup_on_paste : true,
                paste_remove_styles: true,
                paste_remove_styles_if_webkit: true,
                paste_strip_class_attributes: true,
                resize: "both",
                theme: "modern",
                valid_elements: "*[*]",
                extended_valid_elements: "*[*]",
                valid_children : "multiline[a],singleline[a]",
                plugins: plugins,
                menubar: menubar,
                cleanup: false,
                verify_html: false,
                toolbar: toolbarOptions,
                image_advtab: true,
                contextmenu: "link image inserttable | cell row column deletetable",
                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 36px",
                image_list: [],
                paste_preprocess: function (plugin, args) {
                    args.content += '';
                },
                setup: function (editor) {
                    editor.on("keyup", function (editor, e) {
                        actualCaretPositionBookmark = tinyMCE.activeEditor.selection.getBookmark(2, true);
                    });
                    editor.on("click", function (editor, e) {
                        actualCaretPositionBookmark = tinyMCE.activeEditor.selection.getBookmark(2, true);
                    });
                    editor.on('getContent', function (e) {
                       
                        if (e.content.indexOf("<a") >= 0) {
                            var data = e.content;
                            var hrefArr = [];
                            $(data).find("a").each(function () {
                                var attr = $(this).attr('lote_id');
                                if (typeof attr !== typeof undefined && attr !== false && $.isNumeric(attr)) {
                                    var text = $(this).text();
                                    e.content = e.content.replace(text+"</a>", text+'</lotelink>');
                                }
                            });
                            e.content = e.content.replace(/\\<a type="page"/g, '<lotelink type="page"');
                            e.content = e.content.replace(/\\<a type="file"/g, '<lotelink type="file"');
                            var data = e.content;
                            $(data).find("a").each(function () {
                                var attr = $(this).attr('lote_id');
                                if (typeof attr !== typeof undefined && attr !== false && $.isNumeric(attr)) {
                                    var text = $(this).attr('href');
                                    e.content = e.content.replace('<a href="'+text+'"', '<lotelink href="'+text+'"');
                                }
                            });
                            var data = e.content;
                            $(data).find("a").each(function () {
                                var attr = $(this).attr('lote_id');
                                if (typeof attr !== typeof undefined && attr !== false && $.isNumeric(attr)) {
                                    e.content = e.content.replace('<a lote_id="'+attr+'"', '<lotelink lote_id="'+attr+'"');
                                }
                            });
                        }
                    });
                    editor.on('paste', function (e) {
                        var paste;
                        if (e.clipboardData.types.indexOf('text/plain') >= 0) {
                            paste = e.clipboardData.getData('text/plain');
                        }

                        if (e.clipboardData.types.indexOf('text/html') >= 0) {
                            var tempPaste = e.clipboardData.getData('text/html');
                            if (tempPaste.includes('')) { // check if the content is a special type such as actual html, image or file
                                var regex = new RegExp("([^]*)|([^]*)", "g"); // tinymce copy includes full html and body tags, and the actual content is actually between the comments
                                paste = tempPaste.replace(regex, '');
                            }
                        }

                        if (paste !== undefined) {
                            paste = paste.replace(/<script[^]*<\\/script>/g, ''); // replaces everything in-between and including (<scrip -- <\\script>)
                            e.preventDefault();
                            insertIntoWysiwyg(paste);
                        }
                    });
                    editor.on('paste_preprocess', function (e) {
                        console.log('paste_preprocess', e.content);
                    });
                    editor.on('beforeSetContent', function (e) {

                        if (e.content.indexOf("<lotelink") >= 0) {

                            var data = e.content;
                            $(data).find("lotelink").each(function () {
                                var attr = $(this).attr('lote_id');
                                if (typeof attr !== typeof undefined && attr !== false && $.isNumeric(attr)) {
                                    var text = $(this).attr('href');
                                    e.content = e.content.replace('<lotelink href="'+text+'"', '<a href="'+text+'"');
                                }

                            });

                            var data = e.content;
                            $(data).find("lotelink").each(function () {
                                var attr = $(this).attr('lote_id');
                                if (typeof attr !== typeof undefined && attr !== false && $.isNumeric(attr)) {
                                    e.content = e.content.replace('<lotelink lote_id="'+attr+'"', '<a lote_id="'+attr+'"');
                                }

                            });

                            e.content = e.content.replace(/\\<lotelink type="img"/g, '<img');
                            e.content = e.content.replace(/\\<lotelink type="page"/g, '<a type="page"');
                            e.content = e.content.replace(/\\<lotelink type="file"/g, '<a type="file"');
                            e.content = e.content.replace(/\\<\\/lotelink>/g, '</a>');

                        }

                    });
                },
                spellchecker_language: "en_GB",
                spellchecker_rpc_url: 'spellchecker.php',
                is_campaign: (profile !== undefined && profile === "campaign"),
                sz_profile: profile
            };

            if(typeof(toolbar) != 'undefined') {
                settings.toolbar1 = toolbar1Custom;
            }

            //Add CSS includes if provided
            if(cssIncludes) {
                settings.content_css = cssIncludes;
            }

            //If newsletter editor...
            if(isNewsletter) {
                settings.width = "800px";
                settings.resize = true;
            }

            if(typeof relativeUrls == 'undefined' || relativeUrls == false) {
                settings.relative_urls = false;
                settings.convert_urls = false;
            }

            settings.sb_links_opts = {
                link_url: true,
                link_email: true,
                link_phone: true
            };

            settings.sb_images_opts = {
                link_upload: true,
                link_external: true
            };

            tinymce.init(settings);

        }
    }

    function setupContentEditor(id, isFullPage, toolbar1Custom, cssIncludes, isNewsletter, profile, relativeUrls, wildcards, overrideHeight) {
        var plugins = [
            "contextmenu", "advlist", "autolink", "lists", "print",  "searchreplace", "visualblocks", "visualchars",
            "code", "save", "directionality", "paste", "textcolor",
            "sb_filemanager", "sb_links", "sb_images", "sb_table", "spellchecker"
        ];
        var contextMenu = " sb_links sb_images inserttable elements web_link pdf_viewer";

        var wildcardSettings = {
            content_holder: false,
            update_forms: false
        };

        if (wildcards) {
            if (profile !== 'campaign') {
                plugins.push("sb_elements");
            }
            plugins.push("sb_wildcards");
            contextMenu = contextMenu + " sb_wildcards sb_wildcards_update_form ";

        }

        var toolbarOptions = "sb_images sb_gallery sb_video pdf_viewer sb_links | formatselect | fontsizeselect forecolor | bold italic underline strikethrough | removeformat | alignleft aligncenter alignright alignjustify | outdent indent | bullist numlist  |  undo redo | code";
        if (profile === "campaign"){
            toolbarOptions = "undo redo | fontsizeselect forecolor | bold italic | removeformat | alignleft aligncenter alignright alignjustify | outdent indent | bullist numlist | sb_links | code";
        }
        else if(profile === "manage_app_mobile") {
            toolbarOptions = "undo redo removeformat |  bold italic | alignleft aligncenter alignright | outdent indent | sb_links | sb_images | code ";
        }
        else {
            plugins.push("sb_gallery");
            plugins.push("sb_video");
            contextMenu = "sb_images sb_gallery sb_video pdf_viewer web_link inserttable elements sb_links";
            //contextMenu =  "sb_gallery sb_video "+contextMenu;

        }


        if(isFullPage || isNewsletter) {
            plugins.push("fullpage");
        }

        var validElements = "*[*]";
        var invalidElements = "";
        var validExtendedElements = '*[*]';
        var validChildren = "multiline[a],singleline[a]";

        var menubar = "edit insert view table tools sb_wildcards";
        if(profile === "manage_app_mobile"){
            menubar = false;
        }
        var height = "600px";
        if(profile == "quick_feed" || profile == "summary" ){
            height = "400px";
        }
        else if( profile === "manage_app_mobile"){
            height = "250px";
        }
        else if( profile === "new_content_holder"){
            height = "400px";
        }
        else if(profile === "company_note"){
            height = "330px";
        }


        if (overrideHeight) {
            height = overrideHeight + "px";
        }

        if($('#'+id).siblings('div.mce-tinymce').length == 0) {

            var settings = {
                branding: false,
                selector: '#' + id,
                width: "100%",
                height: height,
                statusbar: true,
                resize: "both",
                //theme_advanced_resizing: true,
                //theme_advanced_resizing_use_cookie : false,
                theme: "modern",
                allow_html_in_named_anchor: true,
                allow_unsafe_link_target: true,

                valid_elements: validElements,
                extended_valid_elements: validExtendedElements,
                invalid_elements: invalidElements,
//                extended_valid_elements: 'iframe[src|width|height|frameborder|scrolling|allowfullscreen]',
                valid_children : validChildren,
                plugins: plugins,
                // menu: {
                //     edit: { title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall' },
                //     insert: {title: 'Insert', items: 'sb_video sb_gallery sb_images'},
                //     view: {title: 'View', items: 'code | visualaid | spellcheck'},
                //     format: {title: 'Format', items: 'bold italic underline strikethrough superscript subscript | formats | removeformat'},
                //     table: {title: 'Table', items: 'inserttable tableprops deletetable | cell row column'},
                //     tools: {title: 'Tools', items: 'spellchecker code'},
                //     sb_wildcards: { title: 'Wildcards' }
                // },
                menubar: menubar,
                cleanup: false,
                verify_html: false,
                toolbar: toolbarOptions,
                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 36px",

                image_advtab: true,
                image_list: [],
                contextmenu: contextMenu,
                setup: function (editor) {
                    editor.on("init", function () {
                        this.getDoc().body.style.fontSize = '14px';
                        this.getDoc().body.style.fontFamily = 'Verdana';
                    });
                    editor.on("keyup", function (editor, e) {
                        actualCaretPositionBookmark = tinyMCE.activeEditor.selection.getBookmark(2, true);
                    });
                    editor.on("click", function (editor, e) {
                        actualCaretPositionBookmark = tinyMCE.activeEditor.selection.getBookmark(2, true);
                    });
                    editor.on('getContent', function (e) {
                        e.content = e.content.replace(/<p>(<img[^<]*)<\\/p>/gi, function (a) {
                            return a.replace('<p>', '').replace('</p>', '');
                        });
                    });
                    editor.on('BeforePastePreProcess', function(e) {
                        // This will change any html text back to html tags and sanitise scripts and default comments
                        var regex = new RegExp("([^]*)|([^]*)", "g"); // tinymce copy includes full html and body tags, and the actual content is actually between the comments
                        e.content = e.content.replace(/(&lt;)/g, '<')
                                .replace(/(&gt;)/g, '>')
                                .replace(regex, '')
                                .replace(/<script[\\s\\S]*?<\\/script>/g, '');
                    });
                    editor.on('beforeSetContent', function (e) {
                        e.content = e.content.replace(/<p>(<img[^<]*)<\\/p>/gi, function (a) {
                            return a.replace('<p>', '').replace('</p>', '');
                        });
                    });





                },
                spellchecker_language: "en_GB",
                spellchecker_rpc_url: 'spellchecker.php',
                is_campaign: (profile !== undefined && profile === "campaign"),
                sz_profile: profile
            };

            if(typeof(toolbar) != 'undefined') {
                settings.toolbar1 = toolbar1Custom;
            }

            //Add CSS includes if provided
            if(cssIncludes) {
                if($.isArray(cssIncludes)){
                    cssIncludes.push("/theme/website/szschool/css/content.css");
                    cssIncludes.push("https://www.heath.derbyshire.sch.uk/_admin/cms/szschool/account-setting-colours.css");
                    cssIncludes.push("/theme/website/szschool/css/font-awesome.min.css");

                }
                settings.content_css = cssIncludes;

            }else{
                var cssIncludesDefault = ["/theme/website/szschool/css/content.css", "https://www.heath.derbyshire.sch.uk/_admin/cms/szschool/account-setting-colours.css", "/theme/website/szschool/css/font-awesome.min.css"];
                settings.content_css = cssIncludesDefault;
            }

            //If newsletter editor...
            if(isNewsletter) {
                settings.width = "100%";
                settings.resize = true;
                //settings.force_br_newlines = true;
                //settings.force_p_newlines = false;
                settings.forced_root_block = '';
            }

            if(typeof relativeUrls == 'undefined' || relativeUrls == false) {
                settings.relative_urls = false;
                settings.convert_urls = false;
            }

            if (wildcards) {
                settings.wildcards = wildcards;
                settings.wildcardAddons = wildcardSettings;
            }

            settings.is_user_admin = 0;

//            tinymce.execCommand('mceFocus', false, id);
            tinymce.execCommand('mceRemoveEditor', true, id);
            tinymce.init(settings);

        }
    }
\` }} />` }} />

    </>
  );
}
