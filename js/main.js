
// Master JS for State: AL - Persona: Coastal Relaxer
// Comprehensive, mobile-first animations using GSAP (CDN: <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>)
// Draws from js_data.json for globals; animations match stereotype (e.g., bouncy for expressive, smooth for conservative)
// Best practices: DOMContentLoaded, element checks, reduced motion support, mobile detection for shorter durations

document.addEventListener('DOMContentLoaded', () => {
  // Load js_data.json for globals (async fetch for modularity)
  fetch('js/js_data.json')
    .then(response => response.json())
    .then(data => {
      const intensityMod = data.persona.visual_intensity === 'high' ? 1.2 : data.persona.visual_intensity === 'medium' ? 1.0 : 0.8;
      const isMobile = window.innerWidth < 768;
      const mobileMod = data.animation_customizations.mobile_mod;
      const durationMod = isMobile ? intensityMod * mobileMod : intensityMod;

      // Reduced motion check (best practice)
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        return;  // Skip all animations
      }

      // General smooth scroll (vanilla JS, mobile-friendly)
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });

      // Section-specific animations (comprehensive, per role/ID)

  const al_index_section_immigrate_to_alagoas = document.getElementById('al-index-section-immigrate-to-alagoas');
  if (al_index_section_immigrate_to_alagoas) {
    gsap.fromTo('#al-index-section-immigrate-to-alagoas', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_index_form_immigrate_to_alagoas = document.getElementById('al-index-form-immigrate-to-alagoas');
  if (al_index_form_immigrate_to_alagoas) {
    gsap.from('#al-index-form-immigrate-to-alagoas input, #al-index-form-immigrate-to-alagoas textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_index_section_state_vibe = document.getElementById('al-index-section-state-vibe');
  if (al_index_section_state_vibe) {
    gsap.fromTo('#al-index-section-state-vibe', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_index_section_quick_facts_snapshot = document.getElementById('al-index-section-quick-facts-snapshot');
  if (al_index_section_quick_facts_snapshot) {
    gsap.fromTo('#al-index-section-quick-facts-snapshot', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_index_section_alagoas_map = document.getElementById('al-index-section-alagoas-map');
  if (al_index_section_alagoas_map) {
    gsap.fromTo('#al-index-section-alagoas-map', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_index_section_cost_of_living_alagoas = document.getElementById('al-index-section-cost-of-living-alagoas');
  if (al_index_section_cost_of_living_alagoas) {
    gsap.fromTo('#al-index-section-cost-of-living-alagoas', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_index_section_government_context = document.getElementById('al-index-section-government-context');
  if (al_index_section_government_context) {
    gsap.fromTo('#al-index-section-government-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_index_hero_immigration_notes = document.getElementById('al-index-hero-immigration-notes');
  if (al_index_hero_immigration_notes) {
    gsap.fromTo('#al-index-hero-immigration-notes', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_index_list_common_applicant_profiles = document.getElementById('al-index-list-common-applicant-profiles');
  if (al_index_list_common_applicant_profiles) {
    gsap.from('#al-index-list-common-applicant-profiles li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_index_list_economic_drivers = document.getElementById('al-index-list-economic-drivers');
  if (al_index_list_economic_drivers) {
    gsap.from('#al-index-list-economic-drivers li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_index_section_demographics = document.getElementById('al-index-section-demographics');
  if (al_index_section_demographics) {
    gsap.fromTo('#al-index-section-demographics', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_index_section_regional_challenges = document.getElementById('al-index-section-regional-challenges');
  if (al_index_section_regional_challenges) {
    gsap.fromTo('#al-index-section-regional-challenges', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_index_section_regional_opportunities = document.getElementById('al-index-section-regional-opportunities');
  if (al_index_section_regional_opportunities) {
    gsap.fromTo('#al-index-section-regional-opportunities', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_index_section_culture_daily_life = document.getElementById('al-index-section-culture-daily-life');
  if (al_index_section_culture_daily_life) {
    gsap.fromTo('#al-index-section-culture-daily-life', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_index_list_local_language_expressions = document.getElementById('al-index-list-local-language-expressions');
  if (al_index_list_local_language_expressions) {
    gsap.from('#al-index-list-local-language-expressions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_index_list_food_cuisine = document.getElementById('al-index-list-food-cuisine');
  if (al_index_list_food_cuisine) {
    gsap.from('#al-index-list-food-cuisine li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_index_list_festivals_traditions = document.getElementById('al-index-list-festivals-traditions');
  if (al_index_list_festivals_traditions) {
    gsap.from('#al-index-list-festivals-traditions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_index_list_music_artistic_expression = document.getElementById('al-index-list-music-artistic-expression');
  if (al_index_list_music_artistic_expression) {
    gsap.from('#al-index-list-music-artistic-expression li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_index_list_sports_recreation = document.getElementById('al-index-list-sports-recreation');
  if (al_index_list_sports_recreation) {
    gsap.from('#al-index-list-sports-recreation li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_index_list_landmarks_historical_sites = document.getElementById('al-index-list-landmarks-historical-sites');
  if (al_index_list_landmarks_historical_sites) {
    gsap.from('#al-index-list-landmarks-historical-sites li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_index_list_natural_features = document.getElementById('al-index-list-natural-features');
  if (al_index_list_natural_features) {
    gsap.from('#al-index-list-natural-features li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_index_list_parks_protected_areas = document.getElementById('al-index-list-parks-protected-areas');
  if (al_index_list_parks_protected_areas) {
    gsap.from('#al-index-list-parks-protected-areas li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_index_list_museums_cultural_institutions = document.getElementById('al-index-list-museums-cultural-institutions');
  if (al_index_list_museums_cultural_institutions) {
    gsap.from('#al-index-list-museums-cultural-institutions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_index_section_image_gallery = document.getElementById('al-index-section-image-gallery');
  if (al_index_section_image_gallery) {
    gsap.fromTo('#al-index-section-image-gallery', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_index_section_useful_government_links = document.getElementById('al-index-section-useful-government-links');
  if (al_index_section_useful_government_links) {
    gsap.fromTo('#al-index-section-useful-government-links', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_index_hero_federal_police_immigration_links = document.getElementById('al-index-hero-federal-police-immigration-links');
  if (al_index_hero_federal_police_immigration_links) {
    gsap.fromTo('#al-index-hero-federal-police-immigration-links', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_index_section_external_references = document.getElementById('al-index-section-external-references');
  if (al_index_section_external_references) {
    gsap.fromTo('#al-index-section-external-references', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_index_list_immigration_services_overview = document.getElementById('al-index-list-immigration-services-overview');
  if (al_index_list_immigration_services_overview) {
    gsap.from('#al-index-list-immigration-services-overview li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_index_section_why_immigrate_here = document.getElementById('al-index-section-why-immigrate-here');
  if (al_index_section_why_immigrate_here) {
    gsap.fromTo('#al-index-section-why-immigrate-here', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_index_list_travel_services = document.getElementById('al-index-list-travel-services');
  if (al_index_list_travel_services) {
    gsap.from('#al-index-list-travel-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_index_list_how_the_process_works = document.getElementById('al-index-list-how-the-process-works');
  if (al_index_list_how_the_process_works) {
    gsap.from('#al-index-list-how-the-process-works li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_index_section__frequently_asked_questions_about_living_in_alagoas_ = document.getElementById('al-index-section--frequently-asked-questions-about-living-in-alagoas-');
  if (al_index_section__frequently_asked_questions_about_living_in_alagoas_) {
    gsap.fromTo('#al-index-section--frequently-asked-questions-about-living-in-alagoas-', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const contact_cta.html = document.getElementById('contact-cta.html');
  if (contact_cta.html) {
    gsap.fromTo('#contact-cta.html', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_contactcta_section_get_started_in_alagoas = document.getElementById('al-contactcta-section-get-started-in-alagoas');
  if (al_contactcta_section_get_started_in_alagoas) {
    gsap.fromTo('#al-contactcta-section-get-started-in-alagoas', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const renouncing_citizenship.html = document.getElementById('renouncing-citizenship.html');
  if (renouncing_citizenship.html) {
    gsap.fromTo('#renouncing-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_renouncingcitizenship_form_renounce_brazilian_citizenship = document.getElementById('al-renouncingcitizenship-form-renounce-brazilian-citizenship');
  if (al_renouncingcitizenship_form_renounce_brazilian_citizenship) {
    gsap.from('#al-renouncingcitizenship-form-renounce-brazilian-citizenship input, #al-renouncingcitizenship-form-renounce-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_renouncingcitizenship_list_quick_facts = document.getElementById('al-renouncingcitizenship-list-quick-facts');
  if (al_renouncingcitizenship_list_quick_facts) {
    gsap.from('#al-renouncingcitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_renouncingcitizenship_list_common_challenges_applicants_face = document.getElementById('al-renouncingcitizenship-list-common-challenges-applicants-face');
  if (al_renouncingcitizenship_list_common_challenges_applicants_face) {
    gsap.from('#al-renouncingcitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_renouncingcitizenship_list_how_we_solve_these_challenges = document.getElementById('al-renouncingcitizenship-list-how-we-solve-these-challenges');
  if (al_renouncingcitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#al-renouncingcitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_renouncingcitizenship_section_renunciation_overview = document.getElementById('al-renouncingcitizenship-section-renunciation-overview');
  if (al_renouncingcitizenship_section_renunciation_overview) {
    gsap.fromTo('#al-renouncingcitizenship-section-renunciation-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_renouncingcitizenship_form_who_is_this_for = document.getElementById('al-renouncingcitizenship-form-who-is-this-for');
  if (al_renouncingcitizenship_form_who_is_this_for) {
    gsap.from('#al-renouncingcitizenship-form-who-is-this-for input, #al-renouncingcitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_renouncingcitizenship_list_required_documents = document.getElementById('al-renouncingcitizenship-list-required-documents');
  if (al_renouncingcitizenship_list_required_documents) {
    gsap.from('#al-renouncingcitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_renouncingcitizenship_list_process = document.getElementById('al-renouncingcitizenship-list-process');
  if (al_renouncingcitizenship_list_process) {
    gsap.from('#al-renouncingcitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_renouncingcitizenship_section_timelines_deadlines = document.getElementById('al-renouncingcitizenship-section-timelines-deadlines');
  if (al_renouncingcitizenship_section_timelines_deadlines) {
    gsap.fromTo('#al-renouncingcitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_renouncingcitizenship_section_fees_costs = document.getElementById('al-renouncingcitizenship-section-fees-costs');
  if (al_renouncingcitizenship_section_fees_costs) {
    gsap.fromTo('#al-renouncingcitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_renouncingcitizenship_list_risks_common_mistakes = document.getElementById('al-renouncingcitizenship-list-risks-common-mistakes');
  if (al_renouncingcitizenship_list_risks_common_mistakes) {
    gsap.from('#al-renouncingcitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_renouncingcitizenship_section_diy_vs_professional_assistance = document.getElementById('al-renouncingcitizenship-section-diy-vs-professional-assistance');
  if (al_renouncingcitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-renouncingcitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_renouncingcitizenship_section_alagoas_specific_context = document.getElementById('al-renouncingcitizenship-section-alagoas-specific-context');
  if (al_renouncingcitizenship_section_alagoas_specific_context) {
    gsap.fromTo('#al-renouncingcitizenship-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_renouncingcitizenship_section_what_our_clients_say = document.getElementById('al-renouncingcitizenship-section-what-our-clients-say');
  if (al_renouncingcitizenship_section_what_our_clients_say) {
    gsap.fromTo('#al-renouncingcitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_renouncingcitizenship_section_frequently_asked_questions = document.getElementById('al-renouncingcitizenship-section-frequently-asked-questions');
  if (al_renouncingcitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#al-renouncingcitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_renouncingcitizenship_section_international_support = document.getElementById('al-renouncingcitizenship-section-international-support');
  if (al_renouncingcitizenship_section_international_support) {
    gsap.fromTo('#al-renouncingcitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_renouncingcitizenship_list_our_credentials = document.getElementById('al-renouncingcitizenship-list-our-credentials');
  if (al_renouncingcitizenship_list_our_credentials) {
    gsap.from('#al-renouncingcitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_renouncingcitizenship_list_related_services = document.getElementById('al-renouncingcitizenship-list-related-services');
  if (al_renouncingcitizenship_list_related_services) {
    gsap.from('#al-renouncingcitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_renouncingcitizenship_section_youre_in_good_hands = document.getElementById('al-renouncingcitizenship-section-youre-in-good-hands');
  if (al_renouncingcitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#al-renouncingcitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_renouncingcitizenship_section_21 = document.getElementById('al-renouncingcitizenship-section-21');
  if (al_renouncingcitizenship_section_21) {
    gsap.fromTo('#al-renouncingcitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_provisional_form_provisional_naturalisation_in_brazil_for_minors = document.getElementById('al-provisional-form-provisional-naturalisation-in-brazil-for-minors');
  if (al_provisional_form_provisional_naturalisation_in_brazil_for_minors) {
    gsap.from('#al-provisional-form-provisional-naturalisation-in-brazil-for-minors input, #al-provisional-form-provisional-naturalisation-in-brazil-for-minors textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_provisional_list_quick_facts = document.getElementById('al-provisional-list-quick-facts');
  if (al_provisional_list_quick_facts) {
    gsap.from('#al-provisional-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_provisional_list_common_challenges_applicants_face = document.getElementById('al-provisional-list-common-challenges-applicants-face');
  if (al_provisional_list_common_challenges_applicants_face) {
    gsap.from('#al-provisional-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_provisional_list_how_we_solve_these_challenges = document.getElementById('al-provisional-list-how-we-solve-these-challenges');
  if (al_provisional_list_how_we_solve_these_challenges) {
    gsap.from('#al-provisional-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_provisional_section_naturalisation_overview = document.getElementById('al-provisional-section-naturalisation-overview');
  if (al_provisional_section_naturalisation_overview) {
    gsap.fromTo('#al-provisional-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_provisional_form_who_is_this_naturalisation_for = document.getElementById('al-provisional-form-who-is-this-naturalisation-for');
  if (al_provisional_form_who_is_this_naturalisation_for) {
    gsap.from('#al-provisional-form-who-is-this-naturalisation-for input, #al-provisional-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_provisional_list_required_documents = document.getElementById('al-provisional-list-required-documents');
  if (al_provisional_list_required_documents) {
    gsap.from('#al-provisional-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_provisional_list_application_process = document.getElementById('al-provisional-list-application-process');
  if (al_provisional_list_application_process) {
    gsap.from('#al-provisional-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_provisional_section_timelines_deadlines = document.getElementById('al-provisional-section-timelines-deadlines');
  if (al_provisional_section_timelines_deadlines) {
    gsap.fromTo('#al-provisional-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_provisional_section_fees_costs = document.getElementById('al-provisional-section-fees-costs');
  if (al_provisional_section_fees_costs) {
    gsap.fromTo('#al-provisional-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_provisional_list_risks_common_mistakes = document.getElementById('al-provisional-list-risks-common-mistakes');
  if (al_provisional_list_risks_common_mistakes) {
    gsap.from('#al-provisional-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_provisional_section_diy_vs_professional_assistance = document.getElementById('al-provisional-section-diy-vs-professional-assistance');
  if (al_provisional_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-provisional-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_provisional_section_alagoas_specific_context = document.getElementById('al-provisional-section-alagoas-specific-context');
  if (al_provisional_section_alagoas_specific_context) {
    gsap.fromTo('#al-provisional-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_provisional_section_what_our_clients_say = document.getElementById('al-provisional-section-what-our-clients-say');
  if (al_provisional_section_what_our_clients_say) {
    gsap.fromTo('#al-provisional-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_provisional_section_frequently_asked_questions = document.getElementById('al-provisional-section-frequently-asked-questions');
  if (al_provisional_section_frequently_asked_questions) {
    gsap.fromTo('#al-provisional-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_provisional_section_international_support = document.getElementById('al-provisional-section-international-support');
  if (al_provisional_section_international_support) {
    gsap.fromTo('#al-provisional-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_provisional_list_our_credentials = document.getElementById('al-provisional-list-our-credentials');
  if (al_provisional_list_our_credentials) {
    gsap.from('#al-provisional-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_provisional_list_related_services = document.getElementById('al-provisional-list-related-services');
  if (al_provisional_list_related_services) {
    gsap.from('#al-provisional-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_provisional_section_youre_in_good_hands = document.getElementById('al-provisional-section-youre-in-good-hands');
  if (al_provisional_section_youre_in_good_hands) {
    gsap.fromTo('#al-provisional-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_provisional_section_21 = document.getElementById('al-provisional-section-21');
  if (al_provisional_section_21) {
    gsap.fromTo('#al-provisional-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_special_form_special_naturalisation_in_brazil_for_particular_cases = document.getElementById('al-special-form-special-naturalisation-in-brazil-for-particular-cases');
  if (al_special_form_special_naturalisation_in_brazil_for_particular_cases) {
    gsap.from('#al-special-form-special-naturalisation-in-brazil-for-particular-cases input, #al-special-form-special-naturalisation-in-brazil-for-particular-cases textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_special_list_quick_facts = document.getElementById('al-special-list-quick-facts');
  if (al_special_list_quick_facts) {
    gsap.from('#al-special-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_special_list_common_challenges_applicants_face = document.getElementById('al-special-list-common-challenges-applicants-face');
  if (al_special_list_common_challenges_applicants_face) {
    gsap.from('#al-special-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_special_list_how_we_solve_these_challenges = document.getElementById('al-special-list-how-we-solve-these-challenges');
  if (al_special_list_how_we_solve_these_challenges) {
    gsap.from('#al-special-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_special_section_naturalisation_overview = document.getElementById('al-special-section-naturalisation-overview');
  if (al_special_section_naturalisation_overview) {
    gsap.fromTo('#al-special-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_special_form_who_is_this_naturalisation_for = document.getElementById('al-special-form-who-is-this-naturalisation-for');
  if (al_special_form_who_is_this_naturalisation_for) {
    gsap.from('#al-special-form-who-is-this-naturalisation-for input, #al-special-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_special_list_required_documents = document.getElementById('al-special-list-required-documents');
  if (al_special_list_required_documents) {
    gsap.from('#al-special-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_special_list_application_process = document.getElementById('al-special-list-application-process');
  if (al_special_list_application_process) {
    gsap.from('#al-special-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_special_section_timelines_deadlines = document.getElementById('al-special-section-timelines-deadlines');
  if (al_special_section_timelines_deadlines) {
    gsap.fromTo('#al-special-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_special_section_fees_costs = document.getElementById('al-special-section-fees-costs');
  if (al_special_section_fees_costs) {
    gsap.fromTo('#al-special-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_special_list_risks_common_mistakes = document.getElementById('al-special-list-risks-common-mistakes');
  if (al_special_list_risks_common_mistakes) {
    gsap.from('#al-special-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_special_section_diy_vs_professional_assistance = document.getElementById('al-special-section-diy-vs-professional-assistance');
  if (al_special_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-special-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_special_section_alagoas_specific_context = document.getElementById('al-special-section-alagoas-specific-context');
  if (al_special_section_alagoas_specific_context) {
    gsap.fromTo('#al-special-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_special_section_what_our_clients_say = document.getElementById('al-special-section-what-our-clients-say');
  if (al_special_section_what_our_clients_say) {
    gsap.fromTo('#al-special-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_special_section_frequently_asked_questions = document.getElementById('al-special-section-frequently-asked-questions');
  if (al_special_section_frequently_asked_questions) {
    gsap.fromTo('#al-special-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_special_section_international_support = document.getElementById('al-special-section-international-support');
  if (al_special_section_international_support) {
    gsap.fromTo('#al-special-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_special_list_our_credentials = document.getElementById('al-special-list-our-credentials');
  if (al_special_list_our_credentials) {
    gsap.from('#al-special-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_special_list_related_services = document.getElementById('al-special-list-related-services');
  if (al_special_list_related_services) {
    gsap.from('#al-special-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_special_section_youre_in_good_hands = document.getElementById('al-special-section-youre-in-good-hands');
  if (al_special_section_youre_in_good_hands) {
    gsap.fromTo('#al-special-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_special_section_21 = document.getElementById('al-special-section-21');
  if (al_special_section_21) {
    gsap.fromTo('#al-special-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation = document.getElementById('al-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation');
  if (al_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation) {
    gsap.from('#al-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation input, #al-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_ordinary_list_quick_facts = document.getElementById('al-ordinary-list-quick-facts');
  if (al_ordinary_list_quick_facts) {
    gsap.from('#al-ordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_ordinary_list_common_challenges_applicants_face = document.getElementById('al-ordinary-list-common-challenges-applicants-face');
  if (al_ordinary_list_common_challenges_applicants_face) {
    gsap.from('#al-ordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_ordinary_list_how_we_solve_these_challenges = document.getElementById('al-ordinary-list-how-we-solve-these-challenges');
  if (al_ordinary_list_how_we_solve_these_challenges) {
    gsap.from('#al-ordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_ordinary_section_naturalisation_overview = document.getElementById('al-ordinary-section-naturalisation-overview');
  if (al_ordinary_section_naturalisation_overview) {
    gsap.fromTo('#al-ordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_ordinary_form_who_is_this_naturalisation_for = document.getElementById('al-ordinary-form-who-is-this-naturalisation-for');
  if (al_ordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#al-ordinary-form-who-is-this-naturalisation-for input, #al-ordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_ordinary_list_required_documents = document.getElementById('al-ordinary-list-required-documents');
  if (al_ordinary_list_required_documents) {
    gsap.from('#al-ordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_ordinary_list_application_process = document.getElementById('al-ordinary-list-application-process');
  if (al_ordinary_list_application_process) {
    gsap.from('#al-ordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_ordinary_section_timelines_deadlines = document.getElementById('al-ordinary-section-timelines-deadlines');
  if (al_ordinary_section_timelines_deadlines) {
    gsap.fromTo('#al-ordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_ordinary_section_fees_costs = document.getElementById('al-ordinary-section-fees-costs');
  if (al_ordinary_section_fees_costs) {
    gsap.fromTo('#al-ordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_ordinary_list_risks_common_mistakes = document.getElementById('al-ordinary-list-risks-common-mistakes');
  if (al_ordinary_list_risks_common_mistakes) {
    gsap.from('#al-ordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_ordinary_section_diy_vs_professional_assistance = document.getElementById('al-ordinary-section-diy-vs-professional-assistance');
  if (al_ordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-ordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_ordinary_section_alagoas_specific_context = document.getElementById('al-ordinary-section-alagoas-specific-context');
  if (al_ordinary_section_alagoas_specific_context) {
    gsap.fromTo('#al-ordinary-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_ordinary_section_what_our_clients_say = document.getElementById('al-ordinary-section-what-our-clients-say');
  if (al_ordinary_section_what_our_clients_say) {
    gsap.fromTo('#al-ordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_ordinary_section_frequently_asked_questions = document.getElementById('al-ordinary-section-frequently-asked-questions');
  if (al_ordinary_section_frequently_asked_questions) {
    gsap.fromTo('#al-ordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_ordinary_section_international_support = document.getElementById('al-ordinary-section-international-support');
  if (al_ordinary_section_international_support) {
    gsap.fromTo('#al-ordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_ordinary_list_our_credentials = document.getElementById('al-ordinary-list-our-credentials');
  if (al_ordinary_list_our_credentials) {
    gsap.from('#al-ordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_ordinary_list_related_services = document.getElementById('al-ordinary-list-related-services');
  if (al_ordinary_list_related_services) {
    gsap.from('#al-ordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_ordinary_section_youre_in_good_hands = document.getElementById('al-ordinary-section-youre-in-good-hands');
  if (al_ordinary_section_youre_in_good_hands) {
    gsap.fromTo('#al-ordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_ordinary_section_21 = document.getElementById('al-ordinary-section-21');
  if (al_ordinary_section_21) {
    gsap.fromTo('#al-ordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions = document.getElementById('al-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions');
  if (al_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions) {
    gsap.from('#al-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions input, #al-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_extraordinary_list_quick_facts = document.getElementById('al-extraordinary-list-quick-facts');
  if (al_extraordinary_list_quick_facts) {
    gsap.from('#al-extraordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_extraordinary_list_common_challenges_applicants_face = document.getElementById('al-extraordinary-list-common-challenges-applicants-face');
  if (al_extraordinary_list_common_challenges_applicants_face) {
    gsap.from('#al-extraordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_extraordinary_list_how_we_solve_these_challenges = document.getElementById('al-extraordinary-list-how-we-solve-these-challenges');
  if (al_extraordinary_list_how_we_solve_these_challenges) {
    gsap.from('#al-extraordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_extraordinary_section_naturalisation_overview = document.getElementById('al-extraordinary-section-naturalisation-overview');
  if (al_extraordinary_section_naturalisation_overview) {
    gsap.fromTo('#al-extraordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_extraordinary_form_who_is_this_naturalisation_for = document.getElementById('al-extraordinary-form-who-is-this-naturalisation-for');
  if (al_extraordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#al-extraordinary-form-who-is-this-naturalisation-for input, #al-extraordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_extraordinary_list_required_documents = document.getElementById('al-extraordinary-list-required-documents');
  if (al_extraordinary_list_required_documents) {
    gsap.from('#al-extraordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_extraordinary_list_application_process = document.getElementById('al-extraordinary-list-application-process');
  if (al_extraordinary_list_application_process) {
    gsap.from('#al-extraordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_extraordinary_section_timelines_deadlines = document.getElementById('al-extraordinary-section-timelines-deadlines');
  if (al_extraordinary_section_timelines_deadlines) {
    gsap.fromTo('#al-extraordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_extraordinary_section_fees_costs = document.getElementById('al-extraordinary-section-fees-costs');
  if (al_extraordinary_section_fees_costs) {
    gsap.fromTo('#al-extraordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_extraordinary_list_risks_common_mistakes = document.getElementById('al-extraordinary-list-risks-common-mistakes');
  if (al_extraordinary_list_risks_common_mistakes) {
    gsap.from('#al-extraordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_extraordinary_section_diy_vs_professional_assistance = document.getElementById('al-extraordinary-section-diy-vs-professional-assistance');
  if (al_extraordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-extraordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_extraordinary_section_alagoas_specific_context = document.getElementById('al-extraordinary-section-alagoas-specific-context');
  if (al_extraordinary_section_alagoas_specific_context) {
    gsap.fromTo('#al-extraordinary-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_extraordinary_section_what_our_clients_say = document.getElementById('al-extraordinary-section-what-our-clients-say');
  if (al_extraordinary_section_what_our_clients_say) {
    gsap.fromTo('#al-extraordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_extraordinary_section_frequently_asked_questions = document.getElementById('al-extraordinary-section-frequently-asked-questions');
  if (al_extraordinary_section_frequently_asked_questions) {
    gsap.fromTo('#al-extraordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_extraordinary_section_international_support = document.getElementById('al-extraordinary-section-international-support');
  if (al_extraordinary_section_international_support) {
    gsap.fromTo('#al-extraordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_extraordinary_list_our_credentials = document.getElementById('al-extraordinary-list-our-credentials');
  if (al_extraordinary_list_our_credentials) {
    gsap.from('#al-extraordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_extraordinary_list_related_services = document.getElementById('al-extraordinary-list-related-services');
  if (al_extraordinary_list_related_services) {
    gsap.from('#al-extraordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_extraordinary_section_youre_in_good_hands = document.getElementById('al-extraordinary-section-youre-in-good-hands');
  if (al_extraordinary_section_youre_in_good_hands) {
    gsap.fromTo('#al-extraordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_extraordinary_section_21 = document.getElementById('al-extraordinary-section-21');
  if (al_extraordinary_section_21) {
    gsap.fromTo('#al-extraordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const reacquisition_citizenship.html = document.getElementById('reacquisition-citizenship.html');
  if (reacquisition_citizenship.html) {
    gsap.fromTo('#reacquisition-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_reacquisitioncitizenship_form_reacquire_brazilian_citizenship = document.getElementById('al-reacquisitioncitizenship-form-reacquire-brazilian-citizenship');
  if (al_reacquisitioncitizenship_form_reacquire_brazilian_citizenship) {
    gsap.from('#al-reacquisitioncitizenship-form-reacquire-brazilian-citizenship input, #al-reacquisitioncitizenship-form-reacquire-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_reacquisitioncitizenship_list_quick_facts = document.getElementById('al-reacquisitioncitizenship-list-quick-facts');
  if (al_reacquisitioncitizenship_list_quick_facts) {
    gsap.from('#al-reacquisitioncitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_reacquisitioncitizenship_list_common_challenges_applicants_face = document.getElementById('al-reacquisitioncitizenship-list-common-challenges-applicants-face');
  if (al_reacquisitioncitizenship_list_common_challenges_applicants_face) {
    gsap.from('#al-reacquisitioncitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_reacquisitioncitizenship_list_how_we_solve_these_challenges = document.getElementById('al-reacquisitioncitizenship-list-how-we-solve-these-challenges');
  if (al_reacquisitioncitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#al-reacquisitioncitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_reacquisitioncitizenship_section_reacquisition_overview = document.getElementById('al-reacquisitioncitizenship-section-reacquisition-overview');
  if (al_reacquisitioncitizenship_section_reacquisition_overview) {
    gsap.fromTo('#al-reacquisitioncitizenship-section-reacquisition-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_reacquisitioncitizenship_form_who_is_this_for = document.getElementById('al-reacquisitioncitizenship-form-who-is-this-for');
  if (al_reacquisitioncitizenship_form_who_is_this_for) {
    gsap.from('#al-reacquisitioncitizenship-form-who-is-this-for input, #al-reacquisitioncitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_reacquisitioncitizenship_list_required_documents = document.getElementById('al-reacquisitioncitizenship-list-required-documents');
  if (al_reacquisitioncitizenship_list_required_documents) {
    gsap.from('#al-reacquisitioncitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_reacquisitioncitizenship_list_process = document.getElementById('al-reacquisitioncitizenship-list-process');
  if (al_reacquisitioncitizenship_list_process) {
    gsap.from('#al-reacquisitioncitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_reacquisitioncitizenship_section_timelines_deadlines = document.getElementById('al-reacquisitioncitizenship-section-timelines-deadlines');
  if (al_reacquisitioncitizenship_section_timelines_deadlines) {
    gsap.fromTo('#al-reacquisitioncitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_reacquisitioncitizenship_section_fees_costs = document.getElementById('al-reacquisitioncitizenship-section-fees-costs');
  if (al_reacquisitioncitizenship_section_fees_costs) {
    gsap.fromTo('#al-reacquisitioncitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_reacquisitioncitizenship_list_risks_common_mistakes = document.getElementById('al-reacquisitioncitizenship-list-risks-common-mistakes');
  if (al_reacquisitioncitizenship_list_risks_common_mistakes) {
    gsap.from('#al-reacquisitioncitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_reacquisitioncitizenship_section_diy_vs_professional_assistance = document.getElementById('al-reacquisitioncitizenship-section-diy-vs-professional-assistance');
  if (al_reacquisitioncitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-reacquisitioncitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_reacquisitioncitizenship_section_alagoas_specific_context = document.getElementById('al-reacquisitioncitizenship-section-alagoas-specific-context');
  if (al_reacquisitioncitizenship_section_alagoas_specific_context) {
    gsap.fromTo('#al-reacquisitioncitizenship-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_reacquisitioncitizenship_section_what_our_clients_say = document.getElementById('al-reacquisitioncitizenship-section-what-our-clients-say');
  if (al_reacquisitioncitizenship_section_what_our_clients_say) {
    gsap.fromTo('#al-reacquisitioncitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_reacquisitioncitizenship_section_frequently_asked_questions = document.getElementById('al-reacquisitioncitizenship-section-frequently-asked-questions');
  if (al_reacquisitioncitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#al-reacquisitioncitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_reacquisitioncitizenship_section_international_support = document.getElementById('al-reacquisitioncitizenship-section-international-support');
  if (al_reacquisitioncitizenship_section_international_support) {
    gsap.fromTo('#al-reacquisitioncitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_reacquisitioncitizenship_list_our_credentials = document.getElementById('al-reacquisitioncitizenship-list-our-credentials');
  if (al_reacquisitioncitizenship_list_our_credentials) {
    gsap.from('#al-reacquisitioncitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_reacquisitioncitizenship_list_related_services = document.getElementById('al-reacquisitioncitizenship-list-related-services');
  if (al_reacquisitioncitizenship_list_related_services) {
    gsap.from('#al-reacquisitioncitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_reacquisitioncitizenship_section_youre_in_good_hands = document.getElementById('al-reacquisitioncitizenship-section-youre-in-good-hands');
  if (al_reacquisitioncitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#al-reacquisitioncitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_reacquisitioncitizenship_section_21 = document.getElementById('al-reacquisitioncitizenship-section-21');
  if (al_reacquisitioncitizenship_section_21) {
    gsap.fromTo('#al-reacquisitioncitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const scientific_research.html = document.getElementById('scientific-research.html');
  if (scientific_research.html) {
    gsap.fromTo('#scientific-research.html', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil = document.getElementById('al-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil');
  if (al_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil) {
    gsap.from('#al-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil input, #al-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_scientificresearch_list_quick_facts = document.getElementById('al-scientificresearch-list-quick-facts');
  if (al_scientificresearch_list_quick_facts) {
    gsap.from('#al-scientificresearch-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_scientificresearch_list_common_challenges_applicants_face = document.getElementById('al-scientificresearch-list-common-challenges-applicants-face');
  if (al_scientificresearch_list_common_challenges_applicants_face) {
    gsap.from('#al-scientificresearch-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_scientificresearch_list_how_we_solve_these_challenges = document.getElementById('al-scientificresearch-list-how-we-solve-these-challenges');
  if (al_scientificresearch_list_how_we_solve_these_challenges) {
    gsap.from('#al-scientificresearch-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_scientificresearch_section_residency_overview = document.getElementById('al-scientificresearch-section-residency-overview');
  if (al_scientificresearch_section_residency_overview) {
    gsap.fromTo('#al-scientificresearch-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_scientificresearch_form_who_is_this_residency_for = document.getElementById('al-scientificresearch-form-who-is-this-residency-for');
  if (al_scientificresearch_form_who_is_this_residency_for) {
    gsap.from('#al-scientificresearch-form-who-is-this-residency-for input, #al-scientificresearch-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_scientificresearch_list_required_documents = document.getElementById('al-scientificresearch-list-required-documents');
  if (al_scientificresearch_list_required_documents) {
    gsap.from('#al-scientificresearch-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_scientificresearch_list_application_process = document.getElementById('al-scientificresearch-list-application-process');
  if (al_scientificresearch_list_application_process) {
    gsap.from('#al-scientificresearch-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_scientificresearch_section_timelines_deadlines = document.getElementById('al-scientificresearch-section-timelines-deadlines');
  if (al_scientificresearch_section_timelines_deadlines) {
    gsap.fromTo('#al-scientificresearch-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_scientificresearch_section_fees_costs = document.getElementById('al-scientificresearch-section-fees-costs');
  if (al_scientificresearch_section_fees_costs) {
    gsap.fromTo('#al-scientificresearch-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_scientificresearch_list_risks_common_mistakes = document.getElementById('al-scientificresearch-list-risks-common-mistakes');
  if (al_scientificresearch_list_risks_common_mistakes) {
    gsap.from('#al-scientificresearch-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_scientificresearch_section_diy_vs_professional_assistance = document.getElementById('al-scientificresearch-section-diy-vs-professional-assistance');
  if (al_scientificresearch_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-scientificresearch-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_scientificresearch_section_alagoas_specific_context = document.getElementById('al-scientificresearch-section-alagoas-specific-context');
  if (al_scientificresearch_section_alagoas_specific_context) {
    gsap.fromTo('#al-scientificresearch-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_scientificresearch_section_what_our_clients_say = document.getElementById('al-scientificresearch-section-what-our-clients-say');
  if (al_scientificresearch_section_what_our_clients_say) {
    gsap.fromTo('#al-scientificresearch-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_scientificresearch_section_frequently_asked_questions = document.getElementById('al-scientificresearch-section-frequently-asked-questions');
  if (al_scientificresearch_section_frequently_asked_questions) {
    gsap.fromTo('#al-scientificresearch-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_scientificresearch_section_international_support = document.getElementById('al-scientificresearch-section-international-support');
  if (al_scientificresearch_section_international_support) {
    gsap.fromTo('#al-scientificresearch-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_scientificresearch_list_our_credentials = document.getElementById('al-scientificresearch-list-our-credentials');
  if (al_scientificresearch_list_our_credentials) {
    gsap.from('#al-scientificresearch-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_scientificresearch_list_related_services = document.getElementById('al-scientificresearch-list-related-services');
  if (al_scientificresearch_list_related_services) {
    gsap.from('#al-scientificresearch-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_scientificresearch_section_youre_in_good_hands = document.getElementById('al-scientificresearch-section-youre-in-good-hands');
  if (al_scientificresearch_section_youre_in_good_hands) {
    gsap.fromTo('#al-scientificresearch-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_scientificresearch_section_21 = document.getElementById('al-scientificresearch-section-21');
  if (al_scientificresearch_section_21) {
    gsap.fromTo('#al-scientificresearch-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_study_form_study_in_brazil_with_study_residency = document.getElementById('al-study-form-study-in-brazil-with-study-residency');
  if (al_study_form_study_in_brazil_with_study_residency) {
    gsap.from('#al-study-form-study-in-brazil-with-study-residency input, #al-study-form-study-in-brazil-with-study-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_study_list_quick_facts = document.getElementById('al-study-list-quick-facts');
  if (al_study_list_quick_facts) {
    gsap.from('#al-study-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_study_list_common_challenges_applicants_face = document.getElementById('al-study-list-common-challenges-applicants-face');
  if (al_study_list_common_challenges_applicants_face) {
    gsap.from('#al-study-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_study_list_how_we_solve_these_challenges = document.getElementById('al-study-list-how-we-solve-these-challenges');
  if (al_study_list_how_we_solve_these_challenges) {
    gsap.from('#al-study-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_study_section_residency_overview = document.getElementById('al-study-section-residency-overview');
  if (al_study_section_residency_overview) {
    gsap.fromTo('#al-study-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_study_form_who_is_this_residency_for = document.getElementById('al-study-form-who-is-this-residency-for');
  if (al_study_form_who_is_this_residency_for) {
    gsap.from('#al-study-form-who-is-this-residency-for input, #al-study-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_study_list_required_documents = document.getElementById('al-study-list-required-documents');
  if (al_study_list_required_documents) {
    gsap.from('#al-study-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_study_list_application_process = document.getElementById('al-study-list-application-process');
  if (al_study_list_application_process) {
    gsap.from('#al-study-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_study_section_timelines_deadlines = document.getElementById('al-study-section-timelines-deadlines');
  if (al_study_section_timelines_deadlines) {
    gsap.fromTo('#al-study-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_study_section_fees_costs = document.getElementById('al-study-section-fees-costs');
  if (al_study_section_fees_costs) {
    gsap.fromTo('#al-study-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_study_list_risks_common_mistakes = document.getElementById('al-study-list-risks-common-mistakes');
  if (al_study_list_risks_common_mistakes) {
    gsap.from('#al-study-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_study_section_diy_vs_professional_assistance = document.getElementById('al-study-section-diy-vs-professional-assistance');
  if (al_study_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-study-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_study_section_alagoas_specific_context = document.getElementById('al-study-section-alagoas-specific-context');
  if (al_study_section_alagoas_specific_context) {
    gsap.fromTo('#al-study-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_study_section_what_our_clients_say = document.getElementById('al-study-section-what-our-clients-say');
  if (al_study_section_what_our_clients_say) {
    gsap.fromTo('#al-study-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_study_section_frequently_asked_questions = document.getElementById('al-study-section-frequently-asked-questions');
  if (al_study_section_frequently_asked_questions) {
    gsap.fromTo('#al-study-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_study_section_international_support = document.getElementById('al-study-section-international-support');
  if (al_study_section_international_support) {
    gsap.fromTo('#al-study-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_study_list_our_credentials = document.getElementById('al-study-list-our-credentials');
  if (al_study_list_our_credentials) {
    gsap.from('#al-study-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_study_list_related_services = document.getElementById('al-study-list-related-services');
  if (al_study_list_related_services) {
    gsap.from('#al-study-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_study_section_youre_in_good_hands = document.getElementById('al-study-section-youre-in-good-hands');
  if (al_study_section_youre_in_good_hands) {
    gsap.fromTo('#al-study-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_study_section_21 = document.getElementById('al-study-section-21');
  if (al_study_section_21) {
    gsap.fromTo('#al-study-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const educational_exchange.html = document.getElementById('educational-exchange.html');
  if (educational_exchange.html) {
    gsap.fromTo('#educational-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil = document.getElementById('al-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil');
  if (al_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil) {
    gsap.from('#al-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil input, #al-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_educationalexchange_list_quick_facts = document.getElementById('al-educationalexchange-list-quick-facts');
  if (al_educationalexchange_list_quick_facts) {
    gsap.from('#al-educationalexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_educationalexchange_list_common_challenges_applicants_face = document.getElementById('al-educationalexchange-list-common-challenges-applicants-face');
  if (al_educationalexchange_list_common_challenges_applicants_face) {
    gsap.from('#al-educationalexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_educationalexchange_list_how_we_solve_these_challenges = document.getElementById('al-educationalexchange-list-how-we-solve-these-challenges');
  if (al_educationalexchange_list_how_we_solve_these_challenges) {
    gsap.from('#al-educationalexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_educationalexchange_section_residency_overview = document.getElementById('al-educationalexchange-section-residency-overview');
  if (al_educationalexchange_section_residency_overview) {
    gsap.fromTo('#al-educationalexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_educationalexchange_form_who_is_this_residency_for = document.getElementById('al-educationalexchange-form-who-is-this-residency-for');
  if (al_educationalexchange_form_who_is_this_residency_for) {
    gsap.from('#al-educationalexchange-form-who-is-this-residency-for input, #al-educationalexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_educationalexchange_list_required_documents = document.getElementById('al-educationalexchange-list-required-documents');
  if (al_educationalexchange_list_required_documents) {
    gsap.from('#al-educationalexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_educationalexchange_list_application_process = document.getElementById('al-educationalexchange-list-application-process');
  if (al_educationalexchange_list_application_process) {
    gsap.from('#al-educationalexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_educationalexchange_section_timelines_deadlines = document.getElementById('al-educationalexchange-section-timelines-deadlines');
  if (al_educationalexchange_section_timelines_deadlines) {
    gsap.fromTo('#al-educationalexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_educationalexchange_section_fees_costs = document.getElementById('al-educationalexchange-section-fees-costs');
  if (al_educationalexchange_section_fees_costs) {
    gsap.fromTo('#al-educationalexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_educationalexchange_list_risks_common_mistakes = document.getElementById('al-educationalexchange-list-risks-common-mistakes');
  if (al_educationalexchange_list_risks_common_mistakes) {
    gsap.from('#al-educationalexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_educationalexchange_section_diy_vs_professional_assistance = document.getElementById('al-educationalexchange-section-diy-vs-professional-assistance');
  if (al_educationalexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-educationalexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_educationalexchange_section_alagoas_specific_context = document.getElementById('al-educationalexchange-section-alagoas-specific-context');
  if (al_educationalexchange_section_alagoas_specific_context) {
    gsap.fromTo('#al-educationalexchange-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_educationalexchange_section_what_our_clients_say = document.getElementById('al-educationalexchange-section-what-our-clients-say');
  if (al_educationalexchange_section_what_our_clients_say) {
    gsap.fromTo('#al-educationalexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_educationalexchange_section_frequently_asked_questions = document.getElementById('al-educationalexchange-section-frequently-asked-questions');
  if (al_educationalexchange_section_frequently_asked_questions) {
    gsap.fromTo('#al-educationalexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_educationalexchange_section_international_support = document.getElementById('al-educationalexchange-section-international-support');
  if (al_educationalexchange_section_international_support) {
    gsap.fromTo('#al-educationalexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_educationalexchange_list_our_credentials = document.getElementById('al-educationalexchange-list-our-credentials');
  if (al_educationalexchange_list_our_credentials) {
    gsap.from('#al-educationalexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_educationalexchange_list_related_services = document.getElementById('al-educationalexchange-list-related-services');
  if (al_educationalexchange_list_related_services) {
    gsap.from('#al-educationalexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_educationalexchange_section_youre_in_good_hands = document.getElementById('al-educationalexchange-section-youre-in-good-hands');
  if (al_educationalexchange_section_youre_in_good_hands) {
    gsap.fromTo('#al-educationalexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_educationalexchange_section_21 = document.getElementById('al-educationalexchange-section-21');
  if (al_educationalexchange_section_21) {
    gsap.fromTo('#al-educationalexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_humanitarian_form_humanitarian_residency_in_brazil_for_protection = document.getElementById('al-humanitarian-form-humanitarian-residency-in-brazil-for-protection');
  if (al_humanitarian_form_humanitarian_residency_in_brazil_for_protection) {
    gsap.from('#al-humanitarian-form-humanitarian-residency-in-brazil-for-protection input, #al-humanitarian-form-humanitarian-residency-in-brazil-for-protection textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_humanitarian_list_quick_facts = document.getElementById('al-humanitarian-list-quick-facts');
  if (al_humanitarian_list_quick_facts) {
    gsap.from('#al-humanitarian-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_humanitarian_list_common_challenges_applicants_face = document.getElementById('al-humanitarian-list-common-challenges-applicants-face');
  if (al_humanitarian_list_common_challenges_applicants_face) {
    gsap.from('#al-humanitarian-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_humanitarian_list_how_we_solve_these_challenges = document.getElementById('al-humanitarian-list-how-we-solve-these-challenges');
  if (al_humanitarian_list_how_we_solve_these_challenges) {
    gsap.from('#al-humanitarian-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_humanitarian_section_residency_overview = document.getElementById('al-humanitarian-section-residency-overview');
  if (al_humanitarian_section_residency_overview) {
    gsap.fromTo('#al-humanitarian-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_humanitarian_form_who_is_this_residency_for = document.getElementById('al-humanitarian-form-who-is-this-residency-for');
  if (al_humanitarian_form_who_is_this_residency_for) {
    gsap.from('#al-humanitarian-form-who-is-this-residency-for input, #al-humanitarian-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_humanitarian_list_required_documents = document.getElementById('al-humanitarian-list-required-documents');
  if (al_humanitarian_list_required_documents) {
    gsap.from('#al-humanitarian-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_humanitarian_list_application_process = document.getElementById('al-humanitarian-list-application-process');
  if (al_humanitarian_list_application_process) {
    gsap.from('#al-humanitarian-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_humanitarian_section_timelines_deadlines = document.getElementById('al-humanitarian-section-timelines-deadlines');
  if (al_humanitarian_section_timelines_deadlines) {
    gsap.fromTo('#al-humanitarian-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_humanitarian_section_fees_costs = document.getElementById('al-humanitarian-section-fees-costs');
  if (al_humanitarian_section_fees_costs) {
    gsap.fromTo('#al-humanitarian-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_humanitarian_list_risks_common_mistakes = document.getElementById('al-humanitarian-list-risks-common-mistakes');
  if (al_humanitarian_list_risks_common_mistakes) {
    gsap.from('#al-humanitarian-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_humanitarian_section_diy_vs_professional_assistance = document.getElementById('al-humanitarian-section-diy-vs-professional-assistance');
  if (al_humanitarian_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-humanitarian-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_humanitarian_section_alagoas_specific_context = document.getElementById('al-humanitarian-section-alagoas-specific-context');
  if (al_humanitarian_section_alagoas_specific_context) {
    gsap.fromTo('#al-humanitarian-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_humanitarian_section_what_our_clients_say = document.getElementById('al-humanitarian-section-what-our-clients-say');
  if (al_humanitarian_section_what_our_clients_say) {
    gsap.fromTo('#al-humanitarian-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_humanitarian_section_frequently_asked_questions = document.getElementById('al-humanitarian-section-frequently-asked-questions');
  if (al_humanitarian_section_frequently_asked_questions) {
    gsap.fromTo('#al-humanitarian-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_humanitarian_section_international_support = document.getElementById('al-humanitarian-section-international-support');
  if (al_humanitarian_section_international_support) {
    gsap.fromTo('#al-humanitarian-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_humanitarian_list_our_credentials = document.getElementById('al-humanitarian-list-our-credentials');
  if (al_humanitarian_list_our_credentials) {
    gsap.from('#al-humanitarian-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_humanitarian_list_related_services = document.getElementById('al-humanitarian-list-related-services');
  if (al_humanitarian_list_related_services) {
    gsap.from('#al-humanitarian-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_humanitarian_section_youre_in_good_hands = document.getElementById('al-humanitarian-section-youre-in-good-hands');
  if (al_humanitarian_section_youre_in_good_hands) {
    gsap.fromTo('#al-humanitarian-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_humanitarian_section_21 = document.getElementById('al-humanitarian-section-21');
  if (al_humanitarian_section_21) {
    gsap.fromTo('#al-humanitarian-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const digital_nomad.html = document.getElementById('digital-nomad.html');
  if (digital_nomad.html) {
    gsap.fromTo('#digital-nomad.html', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_digitalnomad_form_digital_nomad_residency_in_brazil = document.getElementById('al-digitalnomad-form-digital-nomad-residency-in-brazil');
  if (al_digitalnomad_form_digital_nomad_residency_in_brazil) {
    gsap.from('#al-digitalnomad-form-digital-nomad-residency-in-brazil input, #al-digitalnomad-form-digital-nomad-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_digitalnomad_list_quick_facts = document.getElementById('al-digitalnomad-list-quick-facts');
  if (al_digitalnomad_list_quick_facts) {
    gsap.from('#al-digitalnomad-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_digitalnomad_list_common_challenges_applicants_face = document.getElementById('al-digitalnomad-list-common-challenges-applicants-face');
  if (al_digitalnomad_list_common_challenges_applicants_face) {
    gsap.from('#al-digitalnomad-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_digitalnomad_list_how_we_solve_these_challenges = document.getElementById('al-digitalnomad-list-how-we-solve-these-challenges');
  if (al_digitalnomad_list_how_we_solve_these_challenges) {
    gsap.from('#al-digitalnomad-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_digitalnomad_section_residency_overview = document.getElementById('al-digitalnomad-section-residency-overview');
  if (al_digitalnomad_section_residency_overview) {
    gsap.fromTo('#al-digitalnomad-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_digitalnomad_form_who_is_this_residency_for = document.getElementById('al-digitalnomad-form-who-is-this-residency-for');
  if (al_digitalnomad_form_who_is_this_residency_for) {
    gsap.from('#al-digitalnomad-form-who-is-this-residency-for input, #al-digitalnomad-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_digitalnomad_list_required_documents = document.getElementById('al-digitalnomad-list-required-documents');
  if (al_digitalnomad_list_required_documents) {
    gsap.from('#al-digitalnomad-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_digitalnomad_list_application_process = document.getElementById('al-digitalnomad-list-application-process');
  if (al_digitalnomad_list_application_process) {
    gsap.from('#al-digitalnomad-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_digitalnomad_section_timelines_deadlines = document.getElementById('al-digitalnomad-section-timelines-deadlines');
  if (al_digitalnomad_section_timelines_deadlines) {
    gsap.fromTo('#al-digitalnomad-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_digitalnomad_section_fees_costs = document.getElementById('al-digitalnomad-section-fees-costs');
  if (al_digitalnomad_section_fees_costs) {
    gsap.fromTo('#al-digitalnomad-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_digitalnomad_list_risks_common_mistakes = document.getElementById('al-digitalnomad-list-risks-common-mistakes');
  if (al_digitalnomad_list_risks_common_mistakes) {
    gsap.from('#al-digitalnomad-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_digitalnomad_section_diy_vs_professional_assistance = document.getElementById('al-digitalnomad-section-diy-vs-professional-assistance');
  if (al_digitalnomad_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-digitalnomad-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_digitalnomad_section_alagoas_specific_context = document.getElementById('al-digitalnomad-section-alagoas-specific-context');
  if (al_digitalnomad_section_alagoas_specific_context) {
    gsap.fromTo('#al-digitalnomad-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_digitalnomad_section_what_our_clients_say = document.getElementById('al-digitalnomad-section-what-our-clients-say');
  if (al_digitalnomad_section_what_our_clients_say) {
    gsap.fromTo('#al-digitalnomad-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_digitalnomad_section_frequently_asked_questions = document.getElementById('al-digitalnomad-section-frequently-asked-questions');
  if (al_digitalnomad_section_frequently_asked_questions) {
    gsap.fromTo('#al-digitalnomad-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_digitalnomad_section_international_support = document.getElementById('al-digitalnomad-section-international-support');
  if (al_digitalnomad_section_international_support) {
    gsap.fromTo('#al-digitalnomad-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_digitalnomad_list_our_credentials = document.getElementById('al-digitalnomad-list-our-credentials');
  if (al_digitalnomad_list_our_credentials) {
    gsap.from('#al-digitalnomad-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_digitalnomad_list_related_services = document.getElementById('al-digitalnomad-list-related-services');
  if (al_digitalnomad_list_related_services) {
    gsap.from('#al-digitalnomad-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_digitalnomad_section_youre_in_good_hands = document.getElementById('al-digitalnomad-section-youre-in-good-hands');
  if (al_digitalnomad_section_youre_in_good_hands) {
    gsap.fromTo('#al-digitalnomad-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_digitalnomad_section_21 = document.getElementById('al-digitalnomad-section-21');
  if (al_digitalnomad_section_21) {
    gsap.fromTo('#al-digitalnomad-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const family_reunion.html = document.getElementById('family-reunion.html');
  if (family_reunion.html) {
    gsap.fromTo('#family-reunion.html', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency = document.getElementById('al-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency');
  if (al_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency) {
    gsap.from('#al-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency input, #al-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_familyreunion_list_quick_facts = document.getElementById('al-familyreunion-list-quick-facts');
  if (al_familyreunion_list_quick_facts) {
    gsap.from('#al-familyreunion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_familyreunion_list_common_challenges_applicants_face = document.getElementById('al-familyreunion-list-common-challenges-applicants-face');
  if (al_familyreunion_list_common_challenges_applicants_face) {
    gsap.from('#al-familyreunion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_familyreunion_list_how_we_solve_these_challenges = document.getElementById('al-familyreunion-list-how-we-solve-these-challenges');
  if (al_familyreunion_list_how_we_solve_these_challenges) {
    gsap.from('#al-familyreunion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_familyreunion_section_residency_overview = document.getElementById('al-familyreunion-section-residency-overview');
  if (al_familyreunion_section_residency_overview) {
    gsap.fromTo('#al-familyreunion-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_familyreunion_form_who_is_this_residency_for = document.getElementById('al-familyreunion-form-who-is-this-residency-for');
  if (al_familyreunion_form_who_is_this_residency_for) {
    gsap.from('#al-familyreunion-form-who-is-this-residency-for input, #al-familyreunion-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_familyreunion_list_required_documents = document.getElementById('al-familyreunion-list-required-documents');
  if (al_familyreunion_list_required_documents) {
    gsap.from('#al-familyreunion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_familyreunion_list_application_process = document.getElementById('al-familyreunion-list-application-process');
  if (al_familyreunion_list_application_process) {
    gsap.from('#al-familyreunion-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_familyreunion_section_timelines_deadlines = document.getElementById('al-familyreunion-section-timelines-deadlines');
  if (al_familyreunion_section_timelines_deadlines) {
    gsap.fromTo('#al-familyreunion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_familyreunion_section_fees_costs = document.getElementById('al-familyreunion-section-fees-costs');
  if (al_familyreunion_section_fees_costs) {
    gsap.fromTo('#al-familyreunion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_familyreunion_list_risks_common_mistakes = document.getElementById('al-familyreunion-list-risks-common-mistakes');
  if (al_familyreunion_list_risks_common_mistakes) {
    gsap.from('#al-familyreunion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_familyreunion_section_diy_vs_professional_assistance = document.getElementById('al-familyreunion-section-diy-vs-professional-assistance');
  if (al_familyreunion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-familyreunion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_familyreunion_section_alagoas_specific_context = document.getElementById('al-familyreunion-section-alagoas-specific-context');
  if (al_familyreunion_section_alagoas_specific_context) {
    gsap.fromTo('#al-familyreunion-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_familyreunion_section_what_our_clients_say = document.getElementById('al-familyreunion-section-what-our-clients-say');
  if (al_familyreunion_section_what_our_clients_say) {
    gsap.fromTo('#al-familyreunion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_familyreunion_section_frequently_asked_questions = document.getElementById('al-familyreunion-section-frequently-asked-questions');
  if (al_familyreunion_section_frequently_asked_questions) {
    gsap.fromTo('#al-familyreunion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_familyreunion_section_international_support = document.getElementById('al-familyreunion-section-international-support');
  if (al_familyreunion_section_international_support) {
    gsap.fromTo('#al-familyreunion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_familyreunion_list_our_credentials = document.getElementById('al-familyreunion-list-our-credentials');
  if (al_familyreunion_list_our_credentials) {
    gsap.from('#al-familyreunion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_familyreunion_list_related_services = document.getElementById('al-familyreunion-list-related-services');
  if (al_familyreunion_list_related_services) {
    gsap.from('#al-familyreunion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_familyreunion_section_youre_in_good_hands = document.getElementById('al-familyreunion-section-youre-in-good-hands');
  if (al_familyreunion_section_youre_in_good_hands) {
    gsap.fromTo('#al-familyreunion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_familyreunion_section_21 = document.getElementById('al-familyreunion-section-21');
  if (al_familyreunion_section_21) {
    gsap.fromTo('#al-familyreunion-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_mercosul_form_residency_for_mercosul_citizens_in_brazil = document.getElementById('al-mercosul-form-residency-for-mercosul-citizens-in-brazil');
  if (al_mercosul_form_residency_for_mercosul_citizens_in_brazil) {
    gsap.from('#al-mercosul-form-residency-for-mercosul-citizens-in-brazil input, #al-mercosul-form-residency-for-mercosul-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_mercosul_list_quick_facts = document.getElementById('al-mercosul-list-quick-facts');
  if (al_mercosul_list_quick_facts) {
    gsap.from('#al-mercosul-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_mercosul_list_common_challenges_applicants_face = document.getElementById('al-mercosul-list-common-challenges-applicants-face');
  if (al_mercosul_list_common_challenges_applicants_face) {
    gsap.from('#al-mercosul-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_mercosul_list_how_we_solve_these_challenges = document.getElementById('al-mercosul-list-how-we-solve-these-challenges');
  if (al_mercosul_list_how_we_solve_these_challenges) {
    gsap.from('#al-mercosul-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_mercosul_section_residency_overview = document.getElementById('al-mercosul-section-residency-overview');
  if (al_mercosul_section_residency_overview) {
    gsap.fromTo('#al-mercosul-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_mercosul_form_who_is_this_residency_for = document.getElementById('al-mercosul-form-who-is-this-residency-for');
  if (al_mercosul_form_who_is_this_residency_for) {
    gsap.from('#al-mercosul-form-who-is-this-residency-for input, #al-mercosul-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_mercosul_list_required_documents = document.getElementById('al-mercosul-list-required-documents');
  if (al_mercosul_list_required_documents) {
    gsap.from('#al-mercosul-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_mercosul_list_application_process = document.getElementById('al-mercosul-list-application-process');
  if (al_mercosul_list_application_process) {
    gsap.from('#al-mercosul-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_mercosul_section_timelines_deadlines = document.getElementById('al-mercosul-section-timelines-deadlines');
  if (al_mercosul_section_timelines_deadlines) {
    gsap.fromTo('#al-mercosul-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_mercosul_section_fees_costs = document.getElementById('al-mercosul-section-fees-costs');
  if (al_mercosul_section_fees_costs) {
    gsap.fromTo('#al-mercosul-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_mercosul_list_risks_common_mistakes = document.getElementById('al-mercosul-list-risks-common-mistakes');
  if (al_mercosul_list_risks_common_mistakes) {
    gsap.from('#al-mercosul-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_mercosul_section_diy_vs_professional_assistance = document.getElementById('al-mercosul-section-diy-vs-professional-assistance');
  if (al_mercosul_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-mercosul-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_mercosul_section_alagoas_specific_context = document.getElementById('al-mercosul-section-alagoas-specific-context');
  if (al_mercosul_section_alagoas_specific_context) {
    gsap.fromTo('#al-mercosul-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_mercosul_section_what_our_clients_say = document.getElementById('al-mercosul-section-what-our-clients-say');
  if (al_mercosul_section_what_our_clients_say) {
    gsap.fromTo('#al-mercosul-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_mercosul_section_frequently_asked_questions = document.getElementById('al-mercosul-section-frequently-asked-questions');
  if (al_mercosul_section_frequently_asked_questions) {
    gsap.fromTo('#al-mercosul-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_mercosul_section_international_support = document.getElementById('al-mercosul-section-international-support');
  if (al_mercosul_section_international_support) {
    gsap.fromTo('#al-mercosul-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_mercosul_list_our_credentials = document.getElementById('al-mercosul-list-our-credentials');
  if (al_mercosul_list_our_credentials) {
    gsap.from('#al-mercosul-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_mercosul_list_related_services = document.getElementById('al-mercosul-list-related-services');
  if (al_mercosul_list_related_services) {
    gsap.from('#al-mercosul-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_mercosul_section_youre_in_good_hands = document.getElementById('al-mercosul-section-youre-in-good-hands');
  if (al_mercosul_section_youre_in_good_hands) {
    gsap.fromTo('#al-mercosul-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_mercosul_section_21 = document.getElementById('al-mercosul-section-21');
  if (al_mercosul_section_21) {
    gsap.fromTo('#al-mercosul-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_retiree_form_retire_in_brazil_with_retiree_residency = document.getElementById('al-retiree-form-retire-in-brazil-with-retiree-residency');
  if (al_retiree_form_retire_in_brazil_with_retiree_residency) {
    gsap.from('#al-retiree-form-retire-in-brazil-with-retiree-residency input, #al-retiree-form-retire-in-brazil-with-retiree-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_retiree_list_quick_facts = document.getElementById('al-retiree-list-quick-facts');
  if (al_retiree_list_quick_facts) {
    gsap.from('#al-retiree-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_retiree_list_common_challenges_applicants_face = document.getElementById('al-retiree-list-common-challenges-applicants-face');
  if (al_retiree_list_common_challenges_applicants_face) {
    gsap.from('#al-retiree-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_retiree_list_how_we_solve_these_challenges = document.getElementById('al-retiree-list-how-we-solve-these-challenges');
  if (al_retiree_list_how_we_solve_these_challenges) {
    gsap.from('#al-retiree-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_retiree_section_residency_overview = document.getElementById('al-retiree-section-residency-overview');
  if (al_retiree_section_residency_overview) {
    gsap.fromTo('#al-retiree-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_retiree_form_who_is_this_residency_for = document.getElementById('al-retiree-form-who-is-this-residency-for');
  if (al_retiree_form_who_is_this_residency_for) {
    gsap.from('#al-retiree-form-who-is-this-residency-for input, #al-retiree-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_retiree_list_required_documents = document.getElementById('al-retiree-list-required-documents');
  if (al_retiree_list_required_documents) {
    gsap.from('#al-retiree-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_retiree_list_application_process = document.getElementById('al-retiree-list-application-process');
  if (al_retiree_list_application_process) {
    gsap.from('#al-retiree-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_retiree_section_timelines_deadlines = document.getElementById('al-retiree-section-timelines-deadlines');
  if (al_retiree_section_timelines_deadlines) {
    gsap.fromTo('#al-retiree-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_retiree_section_fees_costs = document.getElementById('al-retiree-section-fees-costs');
  if (al_retiree_section_fees_costs) {
    gsap.fromTo('#al-retiree-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_retiree_list_risks_common_mistakes = document.getElementById('al-retiree-list-risks-common-mistakes');
  if (al_retiree_list_risks_common_mistakes) {
    gsap.from('#al-retiree-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_retiree_section_diy_vs_professional_assistance = document.getElementById('al-retiree-section-diy-vs-professional-assistance');
  if (al_retiree_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-retiree-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_retiree_section_alagoas_specific_context = document.getElementById('al-retiree-section-alagoas-specific-context');
  if (al_retiree_section_alagoas_specific_context) {
    gsap.fromTo('#al-retiree-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_retiree_section_what_our_clients_say = document.getElementById('al-retiree-section-what-our-clients-say');
  if (al_retiree_section_what_our_clients_say) {
    gsap.fromTo('#al-retiree-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_retiree_section_frequently_asked_questions = document.getElementById('al-retiree-section-frequently-asked-questions');
  if (al_retiree_section_frequently_asked_questions) {
    gsap.fromTo('#al-retiree-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_retiree_section_international_support = document.getElementById('al-retiree-section-international-support');
  if (al_retiree_section_international_support) {
    gsap.fromTo('#al-retiree-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_retiree_list_our_credentials = document.getElementById('al-retiree-list-our-credentials');
  if (al_retiree_list_our_credentials) {
    gsap.from('#al-retiree-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_retiree_list_related_services = document.getElementById('al-retiree-list-related-services');
  if (al_retiree_list_related_services) {
    gsap.from('#al-retiree-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_retiree_section_youre_in_good_hands = document.getElementById('al-retiree-section-youre-in-good-hands');
  if (al_retiree_section_youre_in_good_hands) {
    gsap.fromTo('#al-retiree-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_retiree_section_21 = document.getElementById('al-retiree-section-21');
  if (al_retiree_section_21) {
    gsap.fromTo('#al-retiree-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_volunteer_form_volunteer_in_brazil_with_volunteer_residency = document.getElementById('al-volunteer-form-volunteer-in-brazil-with-volunteer-residency');
  if (al_volunteer_form_volunteer_in_brazil_with_volunteer_residency) {
    gsap.from('#al-volunteer-form-volunteer-in-brazil-with-volunteer-residency input, #al-volunteer-form-volunteer-in-brazil-with-volunteer-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_volunteer_list_quick_facts = document.getElementById('al-volunteer-list-quick-facts');
  if (al_volunteer_list_quick_facts) {
    gsap.from('#al-volunteer-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_volunteer_list_common_challenges_applicants_face = document.getElementById('al-volunteer-list-common-challenges-applicants-face');
  if (al_volunteer_list_common_challenges_applicants_face) {
    gsap.from('#al-volunteer-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_volunteer_list_how_we_solve_these_challenges = document.getElementById('al-volunteer-list-how-we-solve-these-challenges');
  if (al_volunteer_list_how_we_solve_these_challenges) {
    gsap.from('#al-volunteer-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_volunteer_section_residency_overview = document.getElementById('al-volunteer-section-residency-overview');
  if (al_volunteer_section_residency_overview) {
    gsap.fromTo('#al-volunteer-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_volunteer_form_who_is_this_residency_for = document.getElementById('al-volunteer-form-who-is-this-residency-for');
  if (al_volunteer_form_who_is_this_residency_for) {
    gsap.from('#al-volunteer-form-who-is-this-residency-for input, #al-volunteer-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_volunteer_list_required_documents = document.getElementById('al-volunteer-list-required-documents');
  if (al_volunteer_list_required_documents) {
    gsap.from('#al-volunteer-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_volunteer_list_application_process = document.getElementById('al-volunteer-list-application-process');
  if (al_volunteer_list_application_process) {
    gsap.from('#al-volunteer-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_volunteer_section_timelines_deadlines = document.getElementById('al-volunteer-section-timelines-deadlines');
  if (al_volunteer_section_timelines_deadlines) {
    gsap.fromTo('#al-volunteer-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_volunteer_section_fees_costs = document.getElementById('al-volunteer-section-fees-costs');
  if (al_volunteer_section_fees_costs) {
    gsap.fromTo('#al-volunteer-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_volunteer_list_risks_common_mistakes = document.getElementById('al-volunteer-list-risks-common-mistakes');
  if (al_volunteer_list_risks_common_mistakes) {
    gsap.from('#al-volunteer-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_volunteer_section_diy_vs_professional_assistance = document.getElementById('al-volunteer-section-diy-vs-professional-assistance');
  if (al_volunteer_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-volunteer-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_volunteer_section_alagoas_specific_context = document.getElementById('al-volunteer-section-alagoas-specific-context');
  if (al_volunteer_section_alagoas_specific_context) {
    gsap.fromTo('#al-volunteer-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_volunteer_section_what_our_clients_say = document.getElementById('al-volunteer-section-what-our-clients-say');
  if (al_volunteer_section_what_our_clients_say) {
    gsap.fromTo('#al-volunteer-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_volunteer_section_frequently_asked_questions = document.getElementById('al-volunteer-section-frequently-asked-questions');
  if (al_volunteer_section_frequently_asked_questions) {
    gsap.fromTo('#al-volunteer-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_volunteer_section_international_support = document.getElementById('al-volunteer-section-international-support');
  if (al_volunteer_section_international_support) {
    gsap.fromTo('#al-volunteer-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_volunteer_list_our_credentials = document.getElementById('al-volunteer-list-our-credentials');
  if (al_volunteer_list_our_credentials) {
    gsap.from('#al-volunteer-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_volunteer_list_related_services = document.getElementById('al-volunteer-list-related-services');
  if (al_volunteer_list_related_services) {
    gsap.from('#al-volunteer-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_volunteer_section_youre_in_good_hands = document.getElementById('al-volunteer-section-youre-in-good-hands');
  if (al_volunteer_section_youre_in_good_hands) {
    gsap.fromTo('#al-volunteer-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_volunteer_section_21 = document.getElementById('al-volunteer-section-21');
  if (al_volunteer_section_21) {
    gsap.fromTo('#al-volunteer-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const skilled_worker.html = document.getElementById('skilled-worker.html');
  if (skilled_worker.html) {
    gsap.fromTo('#skilled-worker.html', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals = document.getElementById('al-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals');
  if (al_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals) {
    gsap.from('#al-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals input, #al-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_skilledworker_list_quick_facts = document.getElementById('al-skilledworker-list-quick-facts');
  if (al_skilledworker_list_quick_facts) {
    gsap.from('#al-skilledworker-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_skilledworker_list_common_challenges_applicants_face = document.getElementById('al-skilledworker-list-common-challenges-applicants-face');
  if (al_skilledworker_list_common_challenges_applicants_face) {
    gsap.from('#al-skilledworker-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_skilledworker_list_how_we_solve_these_challenges = document.getElementById('al-skilledworker-list-how-we-solve-these-challenges');
  if (al_skilledworker_list_how_we_solve_these_challenges) {
    gsap.from('#al-skilledworker-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_skilledworker_section_residency_overview = document.getElementById('al-skilledworker-section-residency-overview');
  if (al_skilledworker_section_residency_overview) {
    gsap.fromTo('#al-skilledworker-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_skilledworker_form_who_is_this_residency_for = document.getElementById('al-skilledworker-form-who-is-this-residency-for');
  if (al_skilledworker_form_who_is_this_residency_for) {
    gsap.from('#al-skilledworker-form-who-is-this-residency-for input, #al-skilledworker-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_skilledworker_list_required_documents = document.getElementById('al-skilledworker-list-required-documents');
  if (al_skilledworker_list_required_documents) {
    gsap.from('#al-skilledworker-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_skilledworker_list_application_process = document.getElementById('al-skilledworker-list-application-process');
  if (al_skilledworker_list_application_process) {
    gsap.from('#al-skilledworker-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_skilledworker_section_timelines_deadlines = document.getElementById('al-skilledworker-section-timelines-deadlines');
  if (al_skilledworker_section_timelines_deadlines) {
    gsap.fromTo('#al-skilledworker-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_skilledworker_section_fees_costs = document.getElementById('al-skilledworker-section-fees-costs');
  if (al_skilledworker_section_fees_costs) {
    gsap.fromTo('#al-skilledworker-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_skilledworker_list_risks_common_mistakes = document.getElementById('al-skilledworker-list-risks-common-mistakes');
  if (al_skilledworker_list_risks_common_mistakes) {
    gsap.from('#al-skilledworker-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_skilledworker_section_diy_vs_professional_assistance = document.getElementById('al-skilledworker-section-diy-vs-professional-assistance');
  if (al_skilledworker_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-skilledworker-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_skilledworker_section_alagoas_specific_context = document.getElementById('al-skilledworker-section-alagoas-specific-context');
  if (al_skilledworker_section_alagoas_specific_context) {
    gsap.fromTo('#al-skilledworker-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_skilledworker_section_what_our_clients_say = document.getElementById('al-skilledworker-section-what-our-clients-say');
  if (al_skilledworker_section_what_our_clients_say) {
    gsap.fromTo('#al-skilledworker-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_skilledworker_section_frequently_asked_questions = document.getElementById('al-skilledworker-section-frequently-asked-questions');
  if (al_skilledworker_section_frequently_asked_questions) {
    gsap.fromTo('#al-skilledworker-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_skilledworker_section_international_support = document.getElementById('al-skilledworker-section-international-support');
  if (al_skilledworker_section_international_support) {
    gsap.fromTo('#al-skilledworker-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_skilledworker_list_our_credentials = document.getElementById('al-skilledworker-list-our-credentials');
  if (al_skilledworker_list_our_credentials) {
    gsap.from('#al-skilledworker-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_skilledworker_list_related_services = document.getElementById('al-skilledworker-list-related-services');
  if (al_skilledworker_list_related_services) {
    gsap.from('#al-skilledworker-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_skilledworker_section_youre_in_good_hands = document.getElementById('al-skilledworker-section-youre-in-good-hands');
  if (al_skilledworker_section_youre_in_good_hands) {
    gsap.fromTo('#al-skilledworker-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_skilledworker_section_21 = document.getElementById('al-skilledworker-section-21');
  if (al_skilledworker_section_21) {
    gsap.fromTo('#al-skilledworker-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_religious_form_religious_residency_in_brazil_for_missions = document.getElementById('al-religious-form-religious-residency-in-brazil-for-missions');
  if (al_religious_form_religious_residency_in_brazil_for_missions) {
    gsap.from('#al-religious-form-religious-residency-in-brazil-for-missions input, #al-religious-form-religious-residency-in-brazil-for-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_religious_list_quick_facts = document.getElementById('al-religious-list-quick-facts');
  if (al_religious_list_quick_facts) {
    gsap.from('#al-religious-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_religious_list_common_challenges_applicants_face = document.getElementById('al-religious-list-common-challenges-applicants-face');
  if (al_religious_list_common_challenges_applicants_face) {
    gsap.from('#al-religious-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_religious_list_how_we_solve_these_challenges = document.getElementById('al-religious-list-how-we-solve-these-challenges');
  if (al_religious_list_how_we_solve_these_challenges) {
    gsap.from('#al-religious-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_religious_section_residency_overview = document.getElementById('al-religious-section-residency-overview');
  if (al_religious_section_residency_overview) {
    gsap.fromTo('#al-religious-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_religious_form_who_is_this_residency_for = document.getElementById('al-religious-form-who-is-this-residency-for');
  if (al_religious_form_who_is_this_residency_for) {
    gsap.from('#al-religious-form-who-is-this-residency-for input, #al-religious-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_religious_list_required_documents = document.getElementById('al-religious-list-required-documents');
  if (al_religious_list_required_documents) {
    gsap.from('#al-religious-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_religious_list_application_process = document.getElementById('al-religious-list-application-process');
  if (al_religious_list_application_process) {
    gsap.from('#al-religious-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_religious_section_timelines_deadlines = document.getElementById('al-religious-section-timelines-deadlines');
  if (al_religious_section_timelines_deadlines) {
    gsap.fromTo('#al-religious-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_religious_section_fees_costs = document.getElementById('al-religious-section-fees-costs');
  if (al_religious_section_fees_costs) {
    gsap.fromTo('#al-religious-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_religious_list_risks_common_mistakes = document.getElementById('al-religious-list-risks-common-mistakes');
  if (al_religious_list_risks_common_mistakes) {
    gsap.from('#al-religious-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_religious_section_diy_vs_professional_assistance = document.getElementById('al-religious-section-diy-vs-professional-assistance');
  if (al_religious_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-religious-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_religious_section_alagoas_specific_context = document.getElementById('al-religious-section-alagoas-specific-context');
  if (al_religious_section_alagoas_specific_context) {
    gsap.fromTo('#al-religious-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_religious_section_what_our_clients_say = document.getElementById('al-religious-section-what-our-clients-say');
  if (al_religious_section_what_our_clients_say) {
    gsap.fromTo('#al-religious-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_religious_section_frequently_asked_questions = document.getElementById('al-religious-section-frequently-asked-questions');
  if (al_religious_section_frequently_asked_questions) {
    gsap.fromTo('#al-religious-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_religious_section_international_support = document.getElementById('al-religious-section-international-support');
  if (al_religious_section_international_support) {
    gsap.fromTo('#al-religious-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_religious_list_our_credentials = document.getElementById('al-religious-list-our-credentials');
  if (al_religious_list_our_credentials) {
    gsap.from('#al-religious-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_religious_list_related_services = document.getElementById('al-religious-list-related-services');
  if (al_religious_list_related_services) {
    gsap.from('#al-religious-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_religious_section_youre_in_good_hands = document.getElementById('al-religious-section-youre-in-good-hands');
  if (al_religious_section_youre_in_good_hands) {
    gsap.fromTo('#al-religious-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_religious_section_21 = document.getElementById('al-religious-section-21');
  if (al_religious_section_21) {
    gsap.fromTo('#al-religious-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_investor_form_gain_residency_in_brazil_through_investment = document.getElementById('al-investor-form-gain-residency-in-brazil-through-investment');
  if (al_investor_form_gain_residency_in_brazil_through_investment) {
    gsap.from('#al-investor-form-gain-residency-in-brazil-through-investment input, #al-investor-form-gain-residency-in-brazil-through-investment textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_investor_list_quick_facts = document.getElementById('al-investor-list-quick-facts');
  if (al_investor_list_quick_facts) {
    gsap.from('#al-investor-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_investor_list_common_challenges_applicants_face = document.getElementById('al-investor-list-common-challenges-applicants-face');
  if (al_investor_list_common_challenges_applicants_face) {
    gsap.from('#al-investor-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_investor_list_how_we_solve_these_challenges = document.getElementById('al-investor-list-how-we-solve-these-challenges');
  if (al_investor_list_how_we_solve_these_challenges) {
    gsap.from('#al-investor-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_investor_section_residency_overview = document.getElementById('al-investor-section-residency-overview');
  if (al_investor_section_residency_overview) {
    gsap.fromTo('#al-investor-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_investor_form_who_is_this_residency_for = document.getElementById('al-investor-form-who-is-this-residency-for');
  if (al_investor_form_who_is_this_residency_for) {
    gsap.from('#al-investor-form-who-is-this-residency-for input, #al-investor-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_investor_list_required_documents = document.getElementById('al-investor-list-required-documents');
  if (al_investor_list_required_documents) {
    gsap.from('#al-investor-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_investor_list_application_process = document.getElementById('al-investor-list-application-process');
  if (al_investor_list_application_process) {
    gsap.from('#al-investor-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_investor_section_timelines_deadlines = document.getElementById('al-investor-section-timelines-deadlines');
  if (al_investor_section_timelines_deadlines) {
    gsap.fromTo('#al-investor-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_investor_section_fees_costs = document.getElementById('al-investor-section-fees-costs');
  if (al_investor_section_fees_costs) {
    gsap.fromTo('#al-investor-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_investor_list_risks_common_mistakes = document.getElementById('al-investor-list-risks-common-mistakes');
  if (al_investor_list_risks_common_mistakes) {
    gsap.from('#al-investor-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_investor_section_diy_vs_professional_assistance = document.getElementById('al-investor-section-diy-vs-professional-assistance');
  if (al_investor_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-investor-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_investor_section_alagoas_specific_context = document.getElementById('al-investor-section-alagoas-specific-context');
  if (al_investor_section_alagoas_specific_context) {
    gsap.fromTo('#al-investor-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_investor_section_what_our_clients_say = document.getElementById('al-investor-section-what-our-clients-say');
  if (al_investor_section_what_our_clients_say) {
    gsap.fromTo('#al-investor-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_investor_section_frequently_asked_questions = document.getElementById('al-investor-section-frequently-asked-questions');
  if (al_investor_section_frequently_asked_questions) {
    gsap.fromTo('#al-investor-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_investor_section_international_support = document.getElementById('al-investor-section-international-support');
  if (al_investor_section_international_support) {
    gsap.fromTo('#al-investor-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_investor_list_our_credentials = document.getElementById('al-investor-list-our-credentials');
  if (al_investor_list_our_credentials) {
    gsap.from('#al-investor-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_investor_list_related_services = document.getElementById('al-investor-list-related-services');
  if (al_investor_list_related_services) {
    gsap.from('#al-investor-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_investor_section_youre_in_good_hands = document.getElementById('al-investor-section-youre-in-good-hands');
  if (al_investor_section_youre_in_good_hands) {
    gsap.fromTo('#al-investor-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_investor_section_21 = document.getElementById('al-investor-section-21');
  if (al_investor_section_21) {
    gsap.fromTo('#al-investor-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const health_treatment.html = document.getElementById('health-treatment.html');
  if (health_treatment.html) {
    gsap.fromTo('#health-treatment.html', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil = document.getElementById('al-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil');
  if (al_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil) {
    gsap.from('#al-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil input, #al-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_healthtreatment_list_quick_facts = document.getElementById('al-healthtreatment-list-quick-facts');
  if (al_healthtreatment_list_quick_facts) {
    gsap.from('#al-healthtreatment-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_healthtreatment_list_common_challenges_applicants_face = document.getElementById('al-healthtreatment-list-common-challenges-applicants-face');
  if (al_healthtreatment_list_common_challenges_applicants_face) {
    gsap.from('#al-healthtreatment-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_healthtreatment_list_how_we_solve_these_challenges = document.getElementById('al-healthtreatment-list-how-we-solve-these-challenges');
  if (al_healthtreatment_list_how_we_solve_these_challenges) {
    gsap.from('#al-healthtreatment-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_healthtreatment_section_residency_overview = document.getElementById('al-healthtreatment-section-residency-overview');
  if (al_healthtreatment_section_residency_overview) {
    gsap.fromTo('#al-healthtreatment-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_healthtreatment_form_who_is_this_residency_for = document.getElementById('al-healthtreatment-form-who-is-this-residency-for');
  if (al_healthtreatment_form_who_is_this_residency_for) {
    gsap.from('#al-healthtreatment-form-who-is-this-residency-for input, #al-healthtreatment-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_healthtreatment_list_required_documents = document.getElementById('al-healthtreatment-list-required-documents');
  if (al_healthtreatment_list_required_documents) {
    gsap.from('#al-healthtreatment-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_healthtreatment_list_application_process = document.getElementById('al-healthtreatment-list-application-process');
  if (al_healthtreatment_list_application_process) {
    gsap.from('#al-healthtreatment-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_healthtreatment_section_timelines_deadlines = document.getElementById('al-healthtreatment-section-timelines-deadlines');
  if (al_healthtreatment_section_timelines_deadlines) {
    gsap.fromTo('#al-healthtreatment-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_healthtreatment_section_fees_costs = document.getElementById('al-healthtreatment-section-fees-costs');
  if (al_healthtreatment_section_fees_costs) {
    gsap.fromTo('#al-healthtreatment-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_healthtreatment_list_risks_common_mistakes = document.getElementById('al-healthtreatment-list-risks-common-mistakes');
  if (al_healthtreatment_list_risks_common_mistakes) {
    gsap.from('#al-healthtreatment-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_healthtreatment_section_diy_vs_professional_assistance = document.getElementById('al-healthtreatment-section-diy-vs-professional-assistance');
  if (al_healthtreatment_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-healthtreatment-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_healthtreatment_section_alagoas_specific_context = document.getElementById('al-healthtreatment-section-alagoas-specific-context');
  if (al_healthtreatment_section_alagoas_specific_context) {
    gsap.fromTo('#al-healthtreatment-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_healthtreatment_section_what_our_clients_say = document.getElementById('al-healthtreatment-section-what-our-clients-say');
  if (al_healthtreatment_section_what_our_clients_say) {
    gsap.fromTo('#al-healthtreatment-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_healthtreatment_section_frequently_asked_questions = document.getElementById('al-healthtreatment-section-frequently-asked-questions');
  if (al_healthtreatment_section_frequently_asked_questions) {
    gsap.fromTo('#al-healthtreatment-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_healthtreatment_section_international_support = document.getElementById('al-healthtreatment-section-international-support');
  if (al_healthtreatment_section_international_support) {
    gsap.fromTo('#al-healthtreatment-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_healthtreatment_list_our_credentials = document.getElementById('al-healthtreatment-list-our-credentials');
  if (al_healthtreatment_list_our_credentials) {
    gsap.from('#al-healthtreatment-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_healthtreatment_list_related_services = document.getElementById('al-healthtreatment-list-related-services');
  if (al_healthtreatment_list_related_services) {
    gsap.from('#al-healthtreatment-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_healthtreatment_section_youre_in_good_hands = document.getElementById('al-healthtreatment-section-youre-in-good-hands');
  if (al_healthtreatment_section_youre_in_good_hands) {
    gsap.fromTo('#al-healthtreatment-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_healthtreatment_section_21 = document.getElementById('al-healthtreatment-section-21');
  if (al_healthtreatment_section_21) {
    gsap.fromTo('#al-healthtreatment-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_cplp_form_residency_for_cplp_citizens_in_brazil = document.getElementById('al-cplp-form-residency-for-cplp-citizens-in-brazil');
  if (al_cplp_form_residency_for_cplp_citizens_in_brazil) {
    gsap.from('#al-cplp-form-residency-for-cplp-citizens-in-brazil input, #al-cplp-form-residency-for-cplp-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_cplp_list_quick_facts = document.getElementById('al-cplp-list-quick-facts');
  if (al_cplp_list_quick_facts) {
    gsap.from('#al-cplp-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_cplp_list_common_challenges_applicants_face = document.getElementById('al-cplp-list-common-challenges-applicants-face');
  if (al_cplp_list_common_challenges_applicants_face) {
    gsap.from('#al-cplp-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_cplp_list_how_we_solve_these_challenges = document.getElementById('al-cplp-list-how-we-solve-these-challenges');
  if (al_cplp_list_how_we_solve_these_challenges) {
    gsap.from('#al-cplp-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_cplp_section_residency_overview = document.getElementById('al-cplp-section-residency-overview');
  if (al_cplp_section_residency_overview) {
    gsap.fromTo('#al-cplp-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_cplp_form_who_is_this_residency_for = document.getElementById('al-cplp-form-who-is-this-residency-for');
  if (al_cplp_form_who_is_this_residency_for) {
    gsap.from('#al-cplp-form-who-is-this-residency-for input, #al-cplp-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_cplp_list_required_documents = document.getElementById('al-cplp-list-required-documents');
  if (al_cplp_list_required_documents) {
    gsap.from('#al-cplp-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_cplp_list_application_process = document.getElementById('al-cplp-list-application-process');
  if (al_cplp_list_application_process) {
    gsap.from('#al-cplp-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_cplp_section_timelines_deadlines = document.getElementById('al-cplp-section-timelines-deadlines');
  if (al_cplp_section_timelines_deadlines) {
    gsap.fromTo('#al-cplp-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_cplp_section_fees_costs = document.getElementById('al-cplp-section-fees-costs');
  if (al_cplp_section_fees_costs) {
    gsap.fromTo('#al-cplp-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_cplp_list_risks_common_mistakes = document.getElementById('al-cplp-list-risks-common-mistakes');
  if (al_cplp_list_risks_common_mistakes) {
    gsap.from('#al-cplp-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_cplp_section_diy_vs_professional_assistance = document.getElementById('al-cplp-section-diy-vs-professional-assistance');
  if (al_cplp_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-cplp-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_cplp_section_alagoas_specific_context = document.getElementById('al-cplp-section-alagoas-specific-context');
  if (al_cplp_section_alagoas_specific_context) {
    gsap.fromTo('#al-cplp-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_cplp_section_what_our_clients_say = document.getElementById('al-cplp-section-what-our-clients-say');
  if (al_cplp_section_what_our_clients_say) {
    gsap.fromTo('#al-cplp-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_cplp_section_frequently_asked_questions = document.getElementById('al-cplp-section-frequently-asked-questions');
  if (al_cplp_section_frequently_asked_questions) {
    gsap.fromTo('#al-cplp-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_cplp_section_international_support = document.getElementById('al-cplp-section-international-support');
  if (al_cplp_section_international_support) {
    gsap.fromTo('#al-cplp-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_cplp_list_our_credentials = document.getElementById('al-cplp-list-our-credentials');
  if (al_cplp_list_our_credentials) {
    gsap.from('#al-cplp-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_cplp_list_related_services = document.getElementById('al-cplp-list-related-services');
  if (al_cplp_list_related_services) {
    gsap.from('#al-cplp-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_cplp_section_youre_in_good_hands = document.getElementById('al-cplp-section-youre-in-good-hands');
  if (al_cplp_section_youre_in_good_hands) {
    gsap.fromTo('#al-cplp-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_cplp_section_21 = document.getElementById('al-cplp-section-21');
  if (al_cplp_section_21) {
    gsap.fromTo('#al-cplp-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const youth_exchange.html = document.getElementById('youth-exchange.html');
  if (youth_exchange.html) {
    gsap.fromTo('#youth-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_youthexchange_form_youth_exchange_residency_in_brazil_for_programs = document.getElementById('al-youthexchange-form-youth-exchange-residency-in-brazil-for-programs');
  if (al_youthexchange_form_youth_exchange_residency_in_brazil_for_programs) {
    gsap.from('#al-youthexchange-form-youth-exchange-residency-in-brazil-for-programs input, #al-youthexchange-form-youth-exchange-residency-in-brazil-for-programs textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_youthexchange_list_quick_facts = document.getElementById('al-youthexchange-list-quick-facts');
  if (al_youthexchange_list_quick_facts) {
    gsap.from('#al-youthexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_youthexchange_list_common_challenges_applicants_face = document.getElementById('al-youthexchange-list-common-challenges-applicants-face');
  if (al_youthexchange_list_common_challenges_applicants_face) {
    gsap.from('#al-youthexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_youthexchange_list_how_we_solve_these_challenges = document.getElementById('al-youthexchange-list-how-we-solve-these-challenges');
  if (al_youthexchange_list_how_we_solve_these_challenges) {
    gsap.from('#al-youthexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_youthexchange_section_residency_overview = document.getElementById('al-youthexchange-section-residency-overview');
  if (al_youthexchange_section_residency_overview) {
    gsap.fromTo('#al-youthexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_youthexchange_form_who_is_this_residency_for = document.getElementById('al-youthexchange-form-who-is-this-residency-for');
  if (al_youthexchange_form_who_is_this_residency_for) {
    gsap.from('#al-youthexchange-form-who-is-this-residency-for input, #al-youthexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_youthexchange_list_required_documents = document.getElementById('al-youthexchange-list-required-documents');
  if (al_youthexchange_list_required_documents) {
    gsap.from('#al-youthexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_youthexchange_list_application_process = document.getElementById('al-youthexchange-list-application-process');
  if (al_youthexchange_list_application_process) {
    gsap.from('#al-youthexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_youthexchange_section_timelines_deadlines = document.getElementById('al-youthexchange-section-timelines-deadlines');
  if (al_youthexchange_section_timelines_deadlines) {
    gsap.fromTo('#al-youthexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_youthexchange_section_fees_costs = document.getElementById('al-youthexchange-section-fees-costs');
  if (al_youthexchange_section_fees_costs) {
    gsap.fromTo('#al-youthexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_youthexchange_list_risks_common_mistakes = document.getElementById('al-youthexchange-list-risks-common-mistakes');
  if (al_youthexchange_list_risks_common_mistakes) {
    gsap.from('#al-youthexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_youthexchange_section_diy_vs_professional_assistance = document.getElementById('al-youthexchange-section-diy-vs-professional-assistance');
  if (al_youthexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-youthexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_youthexchange_section_alagoas_specific_context = document.getElementById('al-youthexchange-section-alagoas-specific-context');
  if (al_youthexchange_section_alagoas_specific_context) {
    gsap.fromTo('#al-youthexchange-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_youthexchange_section_what_our_clients_say = document.getElementById('al-youthexchange-section-what-our-clients-say');
  if (al_youthexchange_section_what_our_clients_say) {
    gsap.fromTo('#al-youthexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_youthexchange_section_frequently_asked_questions = document.getElementById('al-youthexchange-section-frequently-asked-questions');
  if (al_youthexchange_section_frequently_asked_questions) {
    gsap.fromTo('#al-youthexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_youthexchange_section_international_support = document.getElementById('al-youthexchange-section-international-support');
  if (al_youthexchange_section_international_support) {
    gsap.fromTo('#al-youthexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_youthexchange_list_our_credentials = document.getElementById('al-youthexchange-list-our-credentials');
  if (al_youthexchange_list_our_credentials) {
    gsap.from('#al-youthexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_youthexchange_list_related_services = document.getElementById('al-youthexchange-list-related-services');
  if (al_youthexchange_list_related_services) {
    gsap.from('#al-youthexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_youthexchange_section_youre_in_good_hands = document.getElementById('al-youthexchange-section-youre-in-good-hands');
  if (al_youthexchange_section_youre_in_good_hands) {
    gsap.fromTo('#al-youthexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_youthexchange_section_21 = document.getElementById('al-youthexchange-section-21');
  if (al_youthexchange_section_21) {
    gsap.fromTo('#al-youthexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_work_form_work_and_reside_in_brazil_with_work_residency = document.getElementById('al-work-form-work-and-reside-in-brazil-with-work-residency');
  if (al_work_form_work_and_reside_in_brazil_with_work_residency) {
    gsap.from('#al-work-form-work-and-reside-in-brazil-with-work-residency input, #al-work-form-work-and-reside-in-brazil-with-work-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_work_list_quick_facts = document.getElementById('al-work-list-quick-facts');
  if (al_work_list_quick_facts) {
    gsap.from('#al-work-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_work_list_common_challenges_applicants_face = document.getElementById('al-work-list-common-challenges-applicants-face');
  if (al_work_list_common_challenges_applicants_face) {
    gsap.from('#al-work-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_work_list_how_we_solve_these_challenges = document.getElementById('al-work-list-how-we-solve-these-challenges');
  if (al_work_list_how_we_solve_these_challenges) {
    gsap.from('#al-work-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_work_section_residency_overview = document.getElementById('al-work-section-residency-overview');
  if (al_work_section_residency_overview) {
    gsap.fromTo('#al-work-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_work_form_who_is_this_residency_for = document.getElementById('al-work-form-who-is-this-residency-for');
  if (al_work_form_who_is_this_residency_for) {
    gsap.from('#al-work-form-who-is-this-residency-for input, #al-work-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_work_list_required_documents = document.getElementById('al-work-list-required-documents');
  if (al_work_list_required_documents) {
    gsap.from('#al-work-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_work_list_application_process = document.getElementById('al-work-list-application-process');
  if (al_work_list_application_process) {
    gsap.from('#al-work-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_work_section_timelines_deadlines = document.getElementById('al-work-section-timelines-deadlines');
  if (al_work_section_timelines_deadlines) {
    gsap.fromTo('#al-work-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_work_section_fees_costs = document.getElementById('al-work-section-fees-costs');
  if (al_work_section_fees_costs) {
    gsap.fromTo('#al-work-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_work_list_risks_common_mistakes = document.getElementById('al-work-list-risks-common-mistakes');
  if (al_work_list_risks_common_mistakes) {
    gsap.from('#al-work-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_work_section_diy_vs_professional_assistance = document.getElementById('al-work-section-diy-vs-professional-assistance');
  if (al_work_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-work-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_work_section_alagoas_specific_context = document.getElementById('al-work-section-alagoas-specific-context');
  if (al_work_section_alagoas_specific_context) {
    gsap.fromTo('#al-work-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_work_section_what_our_clients_say = document.getElementById('al-work-section-what-our-clients-say');
  if (al_work_section_what_our_clients_say) {
    gsap.fromTo('#al-work-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_work_section_frequently_asked_questions = document.getElementById('al-work-section-frequently-asked-questions');
  if (al_work_section_frequently_asked_questions) {
    gsap.fromTo('#al-work-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_work_section_international_support = document.getElementById('al-work-section-international-support');
  if (al_work_section_international_support) {
    gsap.fromTo('#al-work-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_work_list_our_credentials = document.getElementById('al-work-list-our-credentials');
  if (al_work_list_our_credentials) {
    gsap.from('#al-work-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_work_list_related_services = document.getElementById('al-work-list-related-services');
  if (al_work_list_related_services) {
    gsap.from('#al-work-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_work_section_youre_in_good_hands = document.getElementById('al-work-section-youre-in-good-hands');
  if (al_work_section_youre_in_good_hands) {
    gsap.fromTo('#al-work-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_work_section_21 = document.getElementById('al-work-section-21');
  if (al_work_section_21) {
    gsap.fromTo('#al-work-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_startup_form_launch_your_startup_in_brazil_with_the_startup_visa = document.getElementById('al-startup-form-launch-your-startup-in-brazil-with-the-startup-visa');
  if (al_startup_form_launch_your_startup_in_brazil_with_the_startup_visa) {
    gsap.from('#al-startup-form-launch-your-startup-in-brazil-with-the-startup-visa input, #al-startup-form-launch-your-startup-in-brazil-with-the-startup-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_startup_list_quick_facts = document.getElementById('al-startup-list-quick-facts');
  if (al_startup_list_quick_facts) {
    gsap.from('#al-startup-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_startup_list_common_challenges_applicants_face = document.getElementById('al-startup-list-common-challenges-applicants-face');
  if (al_startup_list_common_challenges_applicants_face) {
    gsap.from('#al-startup-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_startup_list_how_we_solve_these_challenges = document.getElementById('al-startup-list-how-we-solve-these-challenges');
  if (al_startup_list_how_we_solve_these_challenges) {
    gsap.from('#al-startup-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_startup_section_visa_overview = document.getElementById('al-startup-section-visa-overview');
  if (al_startup_section_visa_overview) {
    gsap.fromTo('#al-startup-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_startup_form_who_is_this_visa_for = document.getElementById('al-startup-form-who-is-this-visa-for');
  if (al_startup_form_who_is_this_visa_for) {
    gsap.from('#al-startup-form-who-is-this-visa-for input, #al-startup-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_startup_list_required_documents = document.getElementById('al-startup-list-required-documents');
  if (al_startup_list_required_documents) {
    gsap.from('#al-startup-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_startup_list_application_process = document.getElementById('al-startup-list-application-process');
  if (al_startup_list_application_process) {
    gsap.from('#al-startup-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_startup_section_timelines_deadlines = document.getElementById('al-startup-section-timelines-deadlines');
  if (al_startup_section_timelines_deadlines) {
    gsap.fromTo('#al-startup-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_startup_section_fees_costs = document.getElementById('al-startup-section-fees-costs');
  if (al_startup_section_fees_costs) {
    gsap.fromTo('#al-startup-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_startup_list_risks_common_mistakes = document.getElementById('al-startup-list-risks-common-mistakes');
  if (al_startup_list_risks_common_mistakes) {
    gsap.from('#al-startup-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_startup_section_diy_vs_professional_assistance = document.getElementById('al-startup-section-diy-vs-professional-assistance');
  if (al_startup_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-startup-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_startup_section_alagoas_specific_context = document.getElementById('al-startup-section-alagoas-specific-context');
  if (al_startup_section_alagoas_specific_context) {
    gsap.fromTo('#al-startup-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_startup_section_what_our_clients_say = document.getElementById('al-startup-section-what-our-clients-say');
  if (al_startup_section_what_our_clients_say) {
    gsap.fromTo('#al-startup-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_startup_section_frequently_asked_questions = document.getElementById('al-startup-section-frequently-asked-questions');
  if (al_startup_section_frequently_asked_questions) {
    gsap.fromTo('#al-startup-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_startup_section_international_support = document.getElementById('al-startup-section-international-support');
  if (al_startup_section_international_support) {
    gsap.fromTo('#al-startup-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_startup_list_our_credentials = document.getElementById('al-startup-list-our-credentials');
  if (al_startup_list_our_credentials) {
    gsap.from('#al-startup-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_startup_list_related_services = document.getElementById('al-startup-list-related-services');
  if (al_startup_list_related_services) {
    gsap.from('#al-startup-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_startup_section_youre_in_good_hands = document.getElementById('al-startup-section-youre-in-good-hands');
  if (al_startup_section_youre_in_good_hands) {
    gsap.fromTo('#al-startup-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_startup_section_21 = document.getElementById('al-startup-section-21');
  if (al_startup_section_21) {
    gsap.fromTo('#al-startup-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_family_form_reunite_with_family_in_brazil_with_the_family_visa = document.getElementById('al-family-form-reunite-with-family-in-brazil-with-the-family-visa');
  if (al_family_form_reunite_with_family_in_brazil_with_the_family_visa) {
    gsap.from('#al-family-form-reunite-with-family-in-brazil-with-the-family-visa input, #al-family-form-reunite-with-family-in-brazil-with-the-family-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_family_list_quick_facts = document.getElementById('al-family-list-quick-facts');
  if (al_family_list_quick_facts) {
    gsap.from('#al-family-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_family_list_common_challenges_applicants_face = document.getElementById('al-family-list-common-challenges-applicants-face');
  if (al_family_list_common_challenges_applicants_face) {
    gsap.from('#al-family-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_family_list_how_we_solve_these_challenges = document.getElementById('al-family-list-how-we-solve-these-challenges');
  if (al_family_list_how_we_solve_these_challenges) {
    gsap.from('#al-family-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_family_section_visa_overview = document.getElementById('al-family-section-visa-overview');
  if (al_family_section_visa_overview) {
    gsap.fromTo('#al-family-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_family_form_who_is_this_visa_for = document.getElementById('al-family-form-who-is-this-visa-for');
  if (al_family_form_who_is_this_visa_for) {
    gsap.from('#al-family-form-who-is-this-visa-for input, #al-family-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_family_list_required_documents = document.getElementById('al-family-list-required-documents');
  if (al_family_list_required_documents) {
    gsap.from('#al-family-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_family_list_application_process = document.getElementById('al-family-list-application-process');
  if (al_family_list_application_process) {
    gsap.from('#al-family-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_family_section_timelines_deadlines = document.getElementById('al-family-section-timelines-deadlines');
  if (al_family_section_timelines_deadlines) {
    gsap.fromTo('#al-family-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_family_section_fees_costs = document.getElementById('al-family-section-fees-costs');
  if (al_family_section_fees_costs) {
    gsap.fromTo('#al-family-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_family_list_risks_common_mistakes = document.getElementById('al-family-list-risks-common-mistakes');
  if (al_family_list_risks_common_mistakes) {
    gsap.from('#al-family-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_family_section_diy_vs_professional_assistance = document.getElementById('al-family-section-diy-vs-professional-assistance');
  if (al_family_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-family-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_family_section_alagoas_specific_context = document.getElementById('al-family-section-alagoas-specific-context');
  if (al_family_section_alagoas_specific_context) {
    gsap.fromTo('#al-family-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_family_section_what_our_clients_say = document.getElementById('al-family-section-what-our-clients-say');
  if (al_family_section_what_our_clients_say) {
    gsap.fromTo('#al-family-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_family_section_frequently_asked_questions = document.getElementById('al-family-section-frequently-asked-questions');
  if (al_family_section_frequently_asked_questions) {
    gsap.fromTo('#al-family-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_family_section_international_support = document.getElementById('al-family-section-international-support');
  if (al_family_section_international_support) {
    gsap.fromTo('#al-family-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_family_list_our_credentials = document.getElementById('al-family-list-our-credentials');
  if (al_family_list_our_credentials) {
    gsap.from('#al-family-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_family_list_related_services = document.getElementById('al-family-list-related-services');
  if (al_family_list_related_services) {
    gsap.from('#al-family-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_family_section_youre_in_good_hands = document.getElementById('al-family-section-youre-in-good-hands');
  if (al_family_section_youre_in_good_hands) {
    gsap.fromTo('#al-family-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_family_section_21 = document.getElementById('al-family-section-21');
  if (al_family_section_21) {
    gsap.fromTo('#al-family-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_sports_form_compete_in_brazil_with_the_sports_visa = document.getElementById('al-sports-form-compete-in-brazil-with-the-sports-visa');
  if (al_sports_form_compete_in_brazil_with_the_sports_visa) {
    gsap.from('#al-sports-form-compete-in-brazil-with-the-sports-visa input, #al-sports-form-compete-in-brazil-with-the-sports-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_sports_list_quick_facts = document.getElementById('al-sports-list-quick-facts');
  if (al_sports_list_quick_facts) {
    gsap.from('#al-sports-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_sports_list_common_challenges_applicants_face = document.getElementById('al-sports-list-common-challenges-applicants-face');
  if (al_sports_list_common_challenges_applicants_face) {
    gsap.from('#al-sports-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_sports_list_how_we_solve_these_challenges = document.getElementById('al-sports-list-how-we-solve-these-challenges');
  if (al_sports_list_how_we_solve_these_challenges) {
    gsap.from('#al-sports-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_sports_section_visa_overview = document.getElementById('al-sports-section-visa-overview');
  if (al_sports_section_visa_overview) {
    gsap.fromTo('#al-sports-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_sports_form_who_is_this_visa_for = document.getElementById('al-sports-form-who-is-this-visa-for');
  if (al_sports_form_who_is_this_visa_for) {
    gsap.from('#al-sports-form-who-is-this-visa-for input, #al-sports-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_sports_list_required_documents = document.getElementById('al-sports-list-required-documents');
  if (al_sports_list_required_documents) {
    gsap.from('#al-sports-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_sports_list_application_process = document.getElementById('al-sports-list-application-process');
  if (al_sports_list_application_process) {
    gsap.from('#al-sports-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_sports_section_timelines_deadlines = document.getElementById('al-sports-section-timelines-deadlines');
  if (al_sports_section_timelines_deadlines) {
    gsap.fromTo('#al-sports-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_sports_section_fees_costs = document.getElementById('al-sports-section-fees-costs');
  if (al_sports_section_fees_costs) {
    gsap.fromTo('#al-sports-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_sports_list_risks_common_mistakes = document.getElementById('al-sports-list-risks-common-mistakes');
  if (al_sports_list_risks_common_mistakes) {
    gsap.from('#al-sports-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_sports_section_diy_vs_professional_assistance = document.getElementById('al-sports-section-diy-vs-professional-assistance');
  if (al_sports_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-sports-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_sports_section_alagoas_specific_context = document.getElementById('al-sports-section-alagoas-specific-context');
  if (al_sports_section_alagoas_specific_context) {
    gsap.fromTo('#al-sports-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_sports_section_what_our_clients_say = document.getElementById('al-sports-section-what-our-clients-say');
  if (al_sports_section_what_our_clients_say) {
    gsap.fromTo('#al-sports-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_sports_section_frequently_asked_questions = document.getElementById('al-sports-section-frequently-asked-questions');
  if (al_sports_section_frequently_asked_questions) {
    gsap.fromTo('#al-sports-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_sports_section_international_support = document.getElementById('al-sports-section-international-support');
  if (al_sports_section_international_support) {
    gsap.fromTo('#al-sports-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_sports_list_our_credentials = document.getElementById('al-sports-list-our-credentials');
  if (al_sports_list_our_credentials) {
    gsap.from('#al-sports-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_sports_list_related_services = document.getElementById('al-sports-list-related-services');
  if (al_sports_list_related_services) {
    gsap.from('#al-sports-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_sports_section_youre_in_good_hands = document.getElementById('al-sports-section-youre-in-good-hands');
  if (al_sports_section_youre_in_good_hands) {
    gsap.fromTo('#al-sports-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_sports_section_21 = document.getElementById('al-sports-section-21');
  if (al_sports_section_21) {
    gsap.fromTo('#al-sports-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa = document.getElementById('al-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa');
  if (al_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa) {
    gsap.from('#al-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa input, #al-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_medical_list_quick_facts = document.getElementById('al-medical-list-quick-facts');
  if (al_medical_list_quick_facts) {
    gsap.from('#al-medical-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_medical_list_common_challenges_applicants_face = document.getElementById('al-medical-list-common-challenges-applicants-face');
  if (al_medical_list_common_challenges_applicants_face) {
    gsap.from('#al-medical-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_medical_list_how_we_solve_these_challenges = document.getElementById('al-medical-list-how-we-solve-these-challenges');
  if (al_medical_list_how_we_solve_these_challenges) {
    gsap.from('#al-medical-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_medical_section_visa_overview = document.getElementById('al-medical-section-visa-overview');
  if (al_medical_section_visa_overview) {
    gsap.fromTo('#al-medical-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_medical_form_who_is_this_visa_for = document.getElementById('al-medical-form-who-is-this-visa-for');
  if (al_medical_form_who_is_this_visa_for) {
    gsap.from('#al-medical-form-who-is-this-visa-for input, #al-medical-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_medical_list_required_documents = document.getElementById('al-medical-list-required-documents');
  if (al_medical_list_required_documents) {
    gsap.from('#al-medical-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_medical_list_application_process = document.getElementById('al-medical-list-application-process');
  if (al_medical_list_application_process) {
    gsap.from('#al-medical-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_medical_section_timelines_deadlines = document.getElementById('al-medical-section-timelines-deadlines');
  if (al_medical_section_timelines_deadlines) {
    gsap.fromTo('#al-medical-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_medical_section_fees_costs = document.getElementById('al-medical-section-fees-costs');
  if (al_medical_section_fees_costs) {
    gsap.fromTo('#al-medical-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_medical_list_risks_common_mistakes = document.getElementById('al-medical-list-risks-common-mistakes');
  if (al_medical_list_risks_common_mistakes) {
    gsap.from('#al-medical-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_medical_section_diy_vs_professional_assistance = document.getElementById('al-medical-section-diy-vs-professional-assistance');
  if (al_medical_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-medical-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_medical_section_alagoas_specific_context = document.getElementById('al-medical-section-alagoas-specific-context');
  if (al_medical_section_alagoas_specific_context) {
    gsap.fromTo('#al-medical-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_medical_section_what_our_clients_say = document.getElementById('al-medical-section-what-our-clients-say');
  if (al_medical_section_what_our_clients_say) {
    gsap.fromTo('#al-medical-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_medical_section_frequently_asked_questions = document.getElementById('al-medical-section-frequently-asked-questions');
  if (al_medical_section_frequently_asked_questions) {
    gsap.fromTo('#al-medical-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_medical_section_international_support = document.getElementById('al-medical-section-international-support');
  if (al_medical_section_international_support) {
    gsap.fromTo('#al-medical-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_medical_list_our_credentials = document.getElementById('al-medical-list-our-credentials');
  if (al_medical_list_our_credentials) {
    gsap.from('#al-medical-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_medical_list_related_services = document.getElementById('al-medical-list-related-services');
  if (al_medical_list_related_services) {
    gsap.from('#al-medical-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_medical_section_youre_in_good_hands = document.getElementById('al-medical-section-youre-in-good-hands');
  if (al_medical_section_youre_in_good_hands) {
    gsap.fromTo('#al-medical-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_medical_section_21 = document.getElementById('al-medical-section-21');
  if (al_medical_section_21) {
    gsap.fromTo('#al-medical-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa = document.getElementById('al-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa');
  if (al_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa) {
    gsap.from('#al-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa input, #al-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_tourist_list_quick_facts = document.getElementById('al-tourist-list-quick-facts');
  if (al_tourist_list_quick_facts) {
    gsap.from('#al-tourist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_tourist_list_common_challenges_applicants_face = document.getElementById('al-tourist-list-common-challenges-applicants-face');
  if (al_tourist_list_common_challenges_applicants_face) {
    gsap.from('#al-tourist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_tourist_list_how_we_solve_these_challenges = document.getElementById('al-tourist-list-how-we-solve-these-challenges');
  if (al_tourist_list_how_we_solve_these_challenges) {
    gsap.from('#al-tourist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_tourist_section_visa_overview = document.getElementById('al-tourist-section-visa-overview');
  if (al_tourist_section_visa_overview) {
    gsap.fromTo('#al-tourist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_tourist_form_who_is_this_visa_for = document.getElementById('al-tourist-form-who-is-this-visa-for');
  if (al_tourist_form_who_is_this_visa_for) {
    gsap.from('#al-tourist-form-who-is-this-visa-for input, #al-tourist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_tourist_list_required_documents = document.getElementById('al-tourist-list-required-documents');
  if (al_tourist_list_required_documents) {
    gsap.from('#al-tourist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_tourist_list_application_process = document.getElementById('al-tourist-list-application-process');
  if (al_tourist_list_application_process) {
    gsap.from('#al-tourist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_tourist_section_timelines_deadlines = document.getElementById('al-tourist-section-timelines-deadlines');
  if (al_tourist_section_timelines_deadlines) {
    gsap.fromTo('#al-tourist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_tourist_section_fees_costs = document.getElementById('al-tourist-section-fees-costs');
  if (al_tourist_section_fees_costs) {
    gsap.fromTo('#al-tourist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_tourist_list_risks_common_mistakes = document.getElementById('al-tourist-list-risks-common-mistakes');
  if (al_tourist_list_risks_common_mistakes) {
    gsap.from('#al-tourist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_tourist_section_diy_vs_professional_assistance = document.getElementById('al-tourist-section-diy-vs-professional-assistance');
  if (al_tourist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-tourist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_tourist_section_alagoas_specific_context = document.getElementById('al-tourist-section-alagoas-specific-context');
  if (al_tourist_section_alagoas_specific_context) {
    gsap.fromTo('#al-tourist-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_tourist_section_what_our_clients_say = document.getElementById('al-tourist-section-what-our-clients-say');
  if (al_tourist_section_what_our_clients_say) {
    gsap.fromTo('#al-tourist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_tourist_section_frequently_asked_questions = document.getElementById('al-tourist-section-frequently-asked-questions');
  if (al_tourist_section_frequently_asked_questions) {
    gsap.fromTo('#al-tourist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_tourist_section_international_support = document.getElementById('al-tourist-section-international-support');
  if (al_tourist_section_international_support) {
    gsap.fromTo('#al-tourist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_tourist_list_our_credentials = document.getElementById('al-tourist-list-our-credentials');
  if (al_tourist_list_our_credentials) {
    gsap.from('#al-tourist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_tourist_list_related_services = document.getElementById('al-tourist-list-related-services');
  if (al_tourist_list_related_services) {
    gsap.from('#al-tourist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_tourist_section_youre_in_good_hands = document.getElementById('al-tourist-section-youre-in-good-hands');
  if (al_tourist_section_youre_in_good_hands) {
    gsap.fromTo('#al-tourist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_tourist_section_21 = document.getElementById('al-tourist-section-21');
  if (al_tourist_section_21) {
    gsap.fromTo('#al-tourist-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_transit_form_transit_through_brazil_with_the_transit_visa = document.getElementById('al-transit-form-transit-through-brazil-with-the-transit-visa');
  if (al_transit_form_transit_through_brazil_with_the_transit_visa) {
    gsap.from('#al-transit-form-transit-through-brazil-with-the-transit-visa input, #al-transit-form-transit-through-brazil-with-the-transit-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_transit_list_quick_facts = document.getElementById('al-transit-list-quick-facts');
  if (al_transit_list_quick_facts) {
    gsap.from('#al-transit-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_transit_list_common_challenges_applicants_face = document.getElementById('al-transit-list-common-challenges-applicants-face');
  if (al_transit_list_common_challenges_applicants_face) {
    gsap.from('#al-transit-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_transit_list_how_we_solve_these_challenges = document.getElementById('al-transit-list-how-we-solve-these-challenges');
  if (al_transit_list_how_we_solve_these_challenges) {
    gsap.from('#al-transit-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_transit_section_visa_overview = document.getElementById('al-transit-section-visa-overview');
  if (al_transit_section_visa_overview) {
    gsap.fromTo('#al-transit-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_transit_form_who_is_this_visa_for = document.getElementById('al-transit-form-who-is-this-visa-for');
  if (al_transit_form_who_is_this_visa_for) {
    gsap.from('#al-transit-form-who-is-this-visa-for input, #al-transit-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_transit_list_required_documents = document.getElementById('al-transit-list-required-documents');
  if (al_transit_list_required_documents) {
    gsap.from('#al-transit-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_transit_list_application_process = document.getElementById('al-transit-list-application-process');
  if (al_transit_list_application_process) {
    gsap.from('#al-transit-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_transit_section_timelines_deadlines = document.getElementById('al-transit-section-timelines-deadlines');
  if (al_transit_section_timelines_deadlines) {
    gsap.fromTo('#al-transit-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_transit_section_fees_costs = document.getElementById('al-transit-section-fees-costs');
  if (al_transit_section_fees_costs) {
    gsap.fromTo('#al-transit-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_transit_list_risks_common_mistakes = document.getElementById('al-transit-list-risks-common-mistakes');
  if (al_transit_list_risks_common_mistakes) {
    gsap.from('#al-transit-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_transit_section_diy_vs_professional_assistance = document.getElementById('al-transit-section-diy-vs-professional-assistance');
  if (al_transit_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-transit-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_transit_section_alagoas_specific_context = document.getElementById('al-transit-section-alagoas-specific-context');
  if (al_transit_section_alagoas_specific_context) {
    gsap.fromTo('#al-transit-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_transit_section_what_our_clients_say = document.getElementById('al-transit-section-what-our-clients-say');
  if (al_transit_section_what_our_clients_say) {
    gsap.fromTo('#al-transit-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_transit_section_frequently_asked_questions = document.getElementById('al-transit-section-frequently-asked-questions');
  if (al_transit_section_frequently_asked_questions) {
    gsap.fromTo('#al-transit-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_transit_section_international_support = document.getElementById('al-transit-section-international-support');
  if (al_transit_section_international_support) {
    gsap.fromTo('#al-transit-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_transit_list_our_credentials = document.getElementById('al-transit-list-our-credentials');
  if (al_transit_list_our_credentials) {
    gsap.from('#al-transit-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_transit_list_related_services = document.getElementById('al-transit-list-related-services');
  if (al_transit_list_related_services) {
    gsap.from('#al-transit-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_transit_section_youre_in_good_hands = document.getElementById('al-transit-section-youre-in-good-hands');
  if (al_transit_section_youre_in_good_hands) {
    gsap.fromTo('#al-transit-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_transit_section_21 = document.getElementById('al-transit-section-21');
  if (al_transit_section_21) {
    gsap.fromTo('#al-transit-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_student_form_study_in_brazil_with_the_student_visa = document.getElementById('al-student-form-study-in-brazil-with-the-student-visa');
  if (al_student_form_study_in_brazil_with_the_student_visa) {
    gsap.from('#al-student-form-study-in-brazil-with-the-student-visa input, #al-student-form-study-in-brazil-with-the-student-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_student_list_quick_facts = document.getElementById('al-student-list-quick-facts');
  if (al_student_list_quick_facts) {
    gsap.from('#al-student-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_student_list_common_challenges_applicants_face = document.getElementById('al-student-list-common-challenges-applicants-face');
  if (al_student_list_common_challenges_applicants_face) {
    gsap.from('#al-student-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_student_list_how_we_solve_these_challenges = document.getElementById('al-student-list-how-we-solve-these-challenges');
  if (al_student_list_how_we_solve_these_challenges) {
    gsap.from('#al-student-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_student_section_visa_overview = document.getElementById('al-student-section-visa-overview');
  if (al_student_section_visa_overview) {
    gsap.fromTo('#al-student-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_student_form_who_is_this_visa_for = document.getElementById('al-student-form-who-is-this-visa-for');
  if (al_student_form_who_is_this_visa_for) {
    gsap.from('#al-student-form-who-is-this-visa-for input, #al-student-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_student_list_required_documents = document.getElementById('al-student-list-required-documents');
  if (al_student_list_required_documents) {
    gsap.from('#al-student-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_student_list_application_process = document.getElementById('al-student-list-application-process');
  if (al_student_list_application_process) {
    gsap.from('#al-student-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_student_section_timelines_deadlines = document.getElementById('al-student-section-timelines-deadlines');
  if (al_student_section_timelines_deadlines) {
    gsap.fromTo('#al-student-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_student_section_fees_costs = document.getElementById('al-student-section-fees-costs');
  if (al_student_section_fees_costs) {
    gsap.fromTo('#al-student-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_student_list_risks_common_mistakes = document.getElementById('al-student-list-risks-common-mistakes');
  if (al_student_list_risks_common_mistakes) {
    gsap.from('#al-student-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_student_section_diy_vs_professional_assistance = document.getElementById('al-student-section-diy-vs-professional-assistance');
  if (al_student_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-student-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_student_section_alagoas_specific_context = document.getElementById('al-student-section-alagoas-specific-context');
  if (al_student_section_alagoas_specific_context) {
    gsap.fromTo('#al-student-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_student_section_what_our_clients_say = document.getElementById('al-student-section-what-our-clients-say');
  if (al_student_section_what_our_clients_say) {
    gsap.fromTo('#al-student-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_student_section_frequently_asked_questions = document.getElementById('al-student-section-frequently-asked-questions');
  if (al_student_section_frequently_asked_questions) {
    gsap.fromTo('#al-student-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_student_section_international_support = document.getElementById('al-student-section-international-support');
  if (al_student_section_international_support) {
    gsap.fromTo('#al-student-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_student_list_our_credentials = document.getElementById('al-student-list-our-credentials');
  if (al_student_list_our_credentials) {
    gsap.from('#al-student-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_student_list_related_services = document.getElementById('al-student-list-related-services');
  if (al_student_list_related_services) {
    gsap.from('#al-student-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_student_section_youre_in_good_hands = document.getElementById('al-student-section-youre-in-good-hands');
  if (al_student_section_youre_in_good_hands) {
    gsap.fromTo('#al-student-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_student_section_21 = document.getElementById('al-student-section-21');
  if (al_student_section_21) {
    gsap.fromTo('#al-student-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_business_form_conduct_business_in_brazil_with_the_business_visa = document.getElementById('al-business-form-conduct-business-in-brazil-with-the-business-visa');
  if (al_business_form_conduct_business_in_brazil_with_the_business_visa) {
    gsap.from('#al-business-form-conduct-business-in-brazil-with-the-business-visa input, #al-business-form-conduct-business-in-brazil-with-the-business-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_business_list_quick_facts = document.getElementById('al-business-list-quick-facts');
  if (al_business_list_quick_facts) {
    gsap.from('#al-business-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_business_list_common_challenges_applicants_face = document.getElementById('al-business-list-common-challenges-applicants-face');
  if (al_business_list_common_challenges_applicants_face) {
    gsap.from('#al-business-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_business_list_how_we_solve_these_challenges = document.getElementById('al-business-list-how-we-solve-these-challenges');
  if (al_business_list_how_we_solve_these_challenges) {
    gsap.from('#al-business-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_business_section_visa_overview = document.getElementById('al-business-section-visa-overview');
  if (al_business_section_visa_overview) {
    gsap.fromTo('#al-business-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_business_form_who_is_this_visa_for = document.getElementById('al-business-form-who-is-this-visa-for');
  if (al_business_form_who_is_this_visa_for) {
    gsap.from('#al-business-form-who-is-this-visa-for input, #al-business-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_business_list_required_documents = document.getElementById('al-business-list-required-documents');
  if (al_business_list_required_documents) {
    gsap.from('#al-business-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_business_list_application_process = document.getElementById('al-business-list-application-process');
  if (al_business_list_application_process) {
    gsap.from('#al-business-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_business_section_timelines_deadlines = document.getElementById('al-business-section-timelines-deadlines');
  if (al_business_section_timelines_deadlines) {
    gsap.fromTo('#al-business-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_business_section_fees_costs = document.getElementById('al-business-section-fees-costs');
  if (al_business_section_fees_costs) {
    gsap.fromTo('#al-business-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_business_list_risks_common_mistakes = document.getElementById('al-business-list-risks-common-mistakes');
  if (al_business_list_risks_common_mistakes) {
    gsap.from('#al-business-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_business_section_diy_vs_professional_assistance = document.getElementById('al-business-section-diy-vs-professional-assistance');
  if (al_business_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-business-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_business_section_alagoas_specific_context = document.getElementById('al-business-section-alagoas-specific-context');
  if (al_business_section_alagoas_specific_context) {
    gsap.fromTo('#al-business-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_business_section_what_our_clients_say = document.getElementById('al-business-section-what-our-clients-say');
  if (al_business_section_what_our_clients_say) {
    gsap.fromTo('#al-business-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_business_section_frequently_asked_questions = document.getElementById('al-business-section-frequently-asked-questions');
  if (al_business_section_frequently_asked_questions) {
    gsap.fromTo('#al-business-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_business_section_international_support = document.getElementById('al-business-section-international-support');
  if (al_business_section_international_support) {
    gsap.fromTo('#al-business-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_business_list_our_credentials = document.getElementById('al-business-list-our-credentials');
  if (al_business_list_our_credentials) {
    gsap.from('#al-business-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_business_list_related_services = document.getElementById('al-business-list-related-services');
  if (al_business_list_related_services) {
    gsap.from('#al-business-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_business_section_youre_in_good_hands = document.getElementById('al-business-section-youre-in-good-hands');
  if (al_business_section_youre_in_good_hands) {
    gsap.fromTo('#al-business-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_business_section_21 = document.getElementById('al-business-section-21');
  if (al_business_section_21) {
    gsap.fromTo('#al-business-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_research_form_conduct_research_in_brazil_with_the_research_visa = document.getElementById('al-research-form-conduct-research-in-brazil-with-the-research-visa');
  if (al_research_form_conduct_research_in_brazil_with_the_research_visa) {
    gsap.from('#al-research-form-conduct-research-in-brazil-with-the-research-visa input, #al-research-form-conduct-research-in-brazil-with-the-research-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_research_list_quick_facts = document.getElementById('al-research-list-quick-facts');
  if (al_research_list_quick_facts) {
    gsap.from('#al-research-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_research_list_common_challenges_applicants_face = document.getElementById('al-research-list-common-challenges-applicants-face');
  if (al_research_list_common_challenges_applicants_face) {
    gsap.from('#al-research-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_research_list_how_we_solve_these_challenges = document.getElementById('al-research-list-how-we-solve-these-challenges');
  if (al_research_list_how_we_solve_these_challenges) {
    gsap.from('#al-research-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_research_section_visa_overview = document.getElementById('al-research-section-visa-overview');
  if (al_research_section_visa_overview) {
    gsap.fromTo('#al-research-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_research_form_who_is_this_visa_for = document.getElementById('al-research-form-who-is-this-visa-for');
  if (al_research_form_who_is_this_visa_for) {
    gsap.from('#al-research-form-who-is-this-visa-for input, #al-research-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_research_list_required_documents = document.getElementById('al-research-list-required-documents');
  if (al_research_list_required_documents) {
    gsap.from('#al-research-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_research_list_application_process = document.getElementById('al-research-list-application-process');
  if (al_research_list_application_process) {
    gsap.from('#al-research-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_research_section_timelines_deadlines = document.getElementById('al-research-section-timelines-deadlines');
  if (al_research_section_timelines_deadlines) {
    gsap.fromTo('#al-research-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_research_section_fees_costs = document.getElementById('al-research-section-fees-costs');
  if (al_research_section_fees_costs) {
    gsap.fromTo('#al-research-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_research_list_risks_common_mistakes = document.getElementById('al-research-list-risks-common-mistakes');
  if (al_research_list_risks_common_mistakes) {
    gsap.from('#al-research-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_research_section_diy_vs_professional_assistance = document.getElementById('al-research-section-diy-vs-professional-assistance');
  if (al_research_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-research-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_research_section_alagoas_specific_context = document.getElementById('al-research-section-alagoas-specific-context');
  if (al_research_section_alagoas_specific_context) {
    gsap.fromTo('#al-research-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_research_section_what_our_clients_say = document.getElementById('al-research-section-what-our-clients-say');
  if (al_research_section_what_our_clients_say) {
    gsap.fromTo('#al-research-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_research_section_frequently_asked_questions = document.getElementById('al-research-section-frequently-asked-questions');
  if (al_research_section_frequently_asked_questions) {
    gsap.fromTo('#al-research-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_research_section_international_support = document.getElementById('al-research-section-international-support');
  if (al_research_section_international_support) {
    gsap.fromTo('#al-research-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_research_list_our_credentials = document.getElementById('al-research-list-our-credentials');
  if (al_research_list_our_credentials) {
    gsap.from('#al-research-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_research_list_related_services = document.getElementById('al-research-list-related-services');
  if (al_research_list_related_services) {
    gsap.from('#al-research-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_research_section_youre_in_good_hands = document.getElementById('al-research-section-youre-in-good-hands');
  if (al_research_section_youre_in_good_hands) {
    gsap.fromTo('#al-research-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_research_section_21 = document.getElementById('al-research-section-21');
  if (al_research_section_21) {
    gsap.fromTo('#al-research-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_diplomatic_form_official_diplomatic_visa_for_brazil_missions = document.getElementById('al-diplomatic-form-official-diplomatic-visa-for-brazil-missions');
  if (al_diplomatic_form_official_diplomatic_visa_for_brazil_missions) {
    gsap.from('#al-diplomatic-form-official-diplomatic-visa-for-brazil-missions input, #al-diplomatic-form-official-diplomatic-visa-for-brazil-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_diplomatic_list_quick_facts = document.getElementById('al-diplomatic-list-quick-facts');
  if (al_diplomatic_list_quick_facts) {
    gsap.from('#al-diplomatic-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_diplomatic_list_common_challenges_applicants_face = document.getElementById('al-diplomatic-list-common-challenges-applicants-face');
  if (al_diplomatic_list_common_challenges_applicants_face) {
    gsap.from('#al-diplomatic-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_diplomatic_list_how_we_solve_these_challenges = document.getElementById('al-diplomatic-list-how-we-solve-these-challenges');
  if (al_diplomatic_list_how_we_solve_these_challenges) {
    gsap.from('#al-diplomatic-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_diplomatic_section_visa_overview = document.getElementById('al-diplomatic-section-visa-overview');
  if (al_diplomatic_section_visa_overview) {
    gsap.fromTo('#al-diplomatic-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_diplomatic_form_who_is_this_visa_for = document.getElementById('al-diplomatic-form-who-is-this-visa-for');
  if (al_diplomatic_form_who_is_this_visa_for) {
    gsap.from('#al-diplomatic-form-who-is-this-visa-for input, #al-diplomatic-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_diplomatic_list_required_documents = document.getElementById('al-diplomatic-list-required-documents');
  if (al_diplomatic_list_required_documents) {
    gsap.from('#al-diplomatic-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_diplomatic_list_application_process = document.getElementById('al-diplomatic-list-application-process');
  if (al_diplomatic_list_application_process) {
    gsap.from('#al-diplomatic-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_diplomatic_section_timelines_deadlines = document.getElementById('al-diplomatic-section-timelines-deadlines');
  if (al_diplomatic_section_timelines_deadlines) {
    gsap.fromTo('#al-diplomatic-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_diplomatic_section_fees_costs = document.getElementById('al-diplomatic-section-fees-costs');
  if (al_diplomatic_section_fees_costs) {
    gsap.fromTo('#al-diplomatic-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_diplomatic_list_risks_common_mistakes = document.getElementById('al-diplomatic-list-risks-common-mistakes');
  if (al_diplomatic_list_risks_common_mistakes) {
    gsap.from('#al-diplomatic-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_diplomatic_section_diy_vs_professional_assistance = document.getElementById('al-diplomatic-section-diy-vs-professional-assistance');
  if (al_diplomatic_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-diplomatic-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_diplomatic_section_alagoas_specific_context = document.getElementById('al-diplomatic-section-alagoas-specific-context');
  if (al_diplomatic_section_alagoas_specific_context) {
    gsap.fromTo('#al-diplomatic-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_diplomatic_section_what_our_clients_say = document.getElementById('al-diplomatic-section-what-our-clients-say');
  if (al_diplomatic_section_what_our_clients_say) {
    gsap.fromTo('#al-diplomatic-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_diplomatic_section_frequently_asked_questions = document.getElementById('al-diplomatic-section-frequently-asked-questions');
  if (al_diplomatic_section_frequently_asked_questions) {
    gsap.fromTo('#al-diplomatic-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_diplomatic_section_international_support = document.getElementById('al-diplomatic-section-international-support');
  if (al_diplomatic_section_international_support) {
    gsap.fromTo('#al-diplomatic-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_diplomatic_list_our_credentials = document.getElementById('al-diplomatic-list-our-credentials');
  if (al_diplomatic_list_our_credentials) {
    gsap.from('#al-diplomatic-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_diplomatic_list_related_services = document.getElementById('al-diplomatic-list-related-services');
  if (al_diplomatic_list_related_services) {
    gsap.from('#al-diplomatic-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_diplomatic_section_youre_in_good_hands = document.getElementById('al-diplomatic-section-youre-in-good-hands');
  if (al_diplomatic_section_youre_in_good_hands) {
    gsap.fromTo('#al-diplomatic-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_diplomatic_section_21 = document.getElementById('al-diplomatic-section-21');
  if (al_diplomatic_section_21) {
    gsap.fromTo('#al-diplomatic-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_journalist_form_cover_news_in_brazil_with_the_journalist_visa = document.getElementById('al-journalist-form-cover-news-in-brazil-with-the-journalist-visa');
  if (al_journalist_form_cover_news_in_brazil_with_the_journalist_visa) {
    gsap.from('#al-journalist-form-cover-news-in-brazil-with-the-journalist-visa input, #al-journalist-form-cover-news-in-brazil-with-the-journalist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_journalist_list_quick_facts = document.getElementById('al-journalist-list-quick-facts');
  if (al_journalist_list_quick_facts) {
    gsap.from('#al-journalist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_journalist_list_common_challenges_applicants_face = document.getElementById('al-journalist-list-common-challenges-applicants-face');
  if (al_journalist_list_common_challenges_applicants_face) {
    gsap.from('#al-journalist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_journalist_list_how_we_solve_these_challenges = document.getElementById('al-journalist-list-how-we-solve-these-challenges');
  if (al_journalist_list_how_we_solve_these_challenges) {
    gsap.from('#al-journalist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_journalist_section_visa_overview = document.getElementById('al-journalist-section-visa-overview');
  if (al_journalist_section_visa_overview) {
    gsap.fromTo('#al-journalist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_journalist_form_who_is_this_visa_for = document.getElementById('al-journalist-form-who-is-this-visa-for');
  if (al_journalist_form_who_is_this_visa_for) {
    gsap.from('#al-journalist-form-who-is-this-visa-for input, #al-journalist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_journalist_list_required_documents = document.getElementById('al-journalist-list-required-documents');
  if (al_journalist_list_required_documents) {
    gsap.from('#al-journalist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_journalist_list_application_process = document.getElementById('al-journalist-list-application-process');
  if (al_journalist_list_application_process) {
    gsap.from('#al-journalist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_journalist_section_timelines_deadlines = document.getElementById('al-journalist-section-timelines-deadlines');
  if (al_journalist_section_timelines_deadlines) {
    gsap.fromTo('#al-journalist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_journalist_section_fees_costs = document.getElementById('al-journalist-section-fees-costs');
  if (al_journalist_section_fees_costs) {
    gsap.fromTo('#al-journalist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_journalist_list_risks_common_mistakes = document.getElementById('al-journalist-list-risks-common-mistakes');
  if (al_journalist_list_risks_common_mistakes) {
    gsap.from('#al-journalist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_journalist_section_diy_vs_professional_assistance = document.getElementById('al-journalist-section-diy-vs-professional-assistance');
  if (al_journalist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-journalist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_journalist_section_alagoas_specific_context = document.getElementById('al-journalist-section-alagoas-specific-context');
  if (al_journalist_section_alagoas_specific_context) {
    gsap.fromTo('#al-journalist-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_journalist_section_what_our_clients_say = document.getElementById('al-journalist-section-what-our-clients-say');
  if (al_journalist_section_what_our_clients_say) {
    gsap.fromTo('#al-journalist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_journalist_section_frequently_asked_questions = document.getElementById('al-journalist-section-frequently-asked-questions');
  if (al_journalist_section_frequently_asked_questions) {
    gsap.fromTo('#al-journalist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_journalist_section_international_support = document.getElementById('al-journalist-section-international-support');
  if (al_journalist_section_international_support) {
    gsap.fromTo('#al-journalist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_journalist_list_our_credentials = document.getElementById('al-journalist-list-our-credentials');
  if (al_journalist_list_our_credentials) {
    gsap.from('#al-journalist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_journalist_list_related_services = document.getElementById('al-journalist-list-related-services');
  if (al_journalist_list_related_services) {
    gsap.from('#al-journalist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_journalist_section_youre_in_good_hands = document.getElementById('al-journalist-section-youre-in-good-hands');
  if (al_journalist_section_youre_in_good_hands) {
    gsap.fromTo('#al-journalist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_journalist_section_21 = document.getElementById('al-journalist-section-21');
  if (al_journalist_section_21) {
    gsap.fromTo('#al-journalist-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_fines_form_resolve_immigration_fines_in_brazil = document.getElementById('al-fines-form-resolve-immigration-fines-in-brazil');
  if (al_fines_form_resolve_immigration_fines_in_brazil) {
    gsap.from('#al-fines-form-resolve-immigration-fines-in-brazil input, #al-fines-form-resolve-immigration-fines-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_fines_list_quick_facts = document.getElementById('al-fines-list-quick-facts');
  if (al_fines_list_quick_facts) {
    gsap.from('#al-fines-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_fines_list_common_challenges_applicants_face = document.getElementById('al-fines-list-common-challenges-applicants-face');
  if (al_fines_list_common_challenges_applicants_face) {
    gsap.from('#al-fines-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_fines_list_how_we_solve_these_challenges = document.getElementById('al-fines-list-how-we-solve-these-challenges');
  if (al_fines_list_how_we_solve_these_challenges) {
    gsap.from('#al-fines-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_fines_section_service_overview = document.getElementById('al-fines-section-service-overview');
  if (al_fines_section_service_overview) {
    gsap.fromTo('#al-fines-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_fines_form_who_is_this_service_for = document.getElementById('al-fines-form-who-is-this-service-for');
  if (al_fines_form_who_is_this_service_for) {
    gsap.from('#al-fines-form-who-is-this-service-for input, #al-fines-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_fines_list_required_documents = document.getElementById('al-fines-list-required-documents');
  if (al_fines_list_required_documents) {
    gsap.from('#al-fines-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_fines_list_process = document.getElementById('al-fines-list-process');
  if (al_fines_list_process) {
    gsap.from('#al-fines-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_fines_section_timelines_deadlines = document.getElementById('al-fines-section-timelines-deadlines');
  if (al_fines_section_timelines_deadlines) {
    gsap.fromTo('#al-fines-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_fines_section_fees_costs = document.getElementById('al-fines-section-fees-costs');
  if (al_fines_section_fees_costs) {
    gsap.fromTo('#al-fines-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_fines_list_risks_common_mistakes = document.getElementById('al-fines-list-risks-common-mistakes');
  if (al_fines_list_risks_common_mistakes) {
    gsap.from('#al-fines-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_fines_section_diy_vs_professional_assistance = document.getElementById('al-fines-section-diy-vs-professional-assistance');
  if (al_fines_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-fines-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_fines_section_alagoas_specific_context = document.getElementById('al-fines-section-alagoas-specific-context');
  if (al_fines_section_alagoas_specific_context) {
    gsap.fromTo('#al-fines-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_fines_section_what_our_clients_say = document.getElementById('al-fines-section-what-our-clients-say');
  if (al_fines_section_what_our_clients_say) {
    gsap.fromTo('#al-fines-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_fines_section_frequently_asked_questions = document.getElementById('al-fines-section-frequently-asked-questions');
  if (al_fines_section_frequently_asked_questions) {
    gsap.fromTo('#al-fines-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_fines_section_international_support = document.getElementById('al-fines-section-international-support');
  if (al_fines_section_international_support) {
    gsap.fromTo('#al-fines-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_fines_list_our_credentials = document.getElementById('al-fines-list-our-credentials');
  if (al_fines_list_our_credentials) {
    gsap.from('#al-fines-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_fines_list_related_services = document.getElementById('al-fines-list-related-services');
  if (al_fines_list_related_services) {
    gsap.from('#al-fines-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_fines_section_youre_in_good_hands = document.getElementById('al-fines-section-youre-in-good-hands');
  if (al_fines_section_youre_in_good_hands) {
    gsap.fromTo('#al-fines-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_fines_section_21 = document.getElementById('al-fines-section-21');
  if (al_fines_section_21) {
    gsap.fromTo('#al-fines-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_deportation_form_deportation_assistance_in_brazil = document.getElementById('al-deportation-form-deportation-assistance-in-brazil');
  if (al_deportation_form_deportation_assistance_in_brazil) {
    gsap.from('#al-deportation-form-deportation-assistance-in-brazil input, #al-deportation-form-deportation-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_deportation_list_quick_facts = document.getElementById('al-deportation-list-quick-facts');
  if (al_deportation_list_quick_facts) {
    gsap.from('#al-deportation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_deportation_list_common_challenges_applicants_face = document.getElementById('al-deportation-list-common-challenges-applicants-face');
  if (al_deportation_list_common_challenges_applicants_face) {
    gsap.from('#al-deportation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_deportation_list_how_we_solve_these_challenges = document.getElementById('al-deportation-list-how-we-solve-these-challenges');
  if (al_deportation_list_how_we_solve_these_challenges) {
    gsap.from('#al-deportation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_deportation_section_service_overview = document.getElementById('al-deportation-section-service-overview');
  if (al_deportation_section_service_overview) {
    gsap.fromTo('#al-deportation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_deportation_form_who_is_this_service_for = document.getElementById('al-deportation-form-who-is-this-service-for');
  if (al_deportation_form_who_is_this_service_for) {
    gsap.from('#al-deportation-form-who-is-this-service-for input, #al-deportation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_deportation_list_required_documents = document.getElementById('al-deportation-list-required-documents');
  if (al_deportation_list_required_documents) {
    gsap.from('#al-deportation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_deportation_list_process = document.getElementById('al-deportation-list-process');
  if (al_deportation_list_process) {
    gsap.from('#al-deportation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_deportation_section_timelines_deadlines = document.getElementById('al-deportation-section-timelines-deadlines');
  if (al_deportation_section_timelines_deadlines) {
    gsap.fromTo('#al-deportation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_deportation_section_fees_costs = document.getElementById('al-deportation-section-fees-costs');
  if (al_deportation_section_fees_costs) {
    gsap.fromTo('#al-deportation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_deportation_list_risks_common_mistakes = document.getElementById('al-deportation-list-risks-common-mistakes');
  if (al_deportation_list_risks_common_mistakes) {
    gsap.from('#al-deportation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_deportation_section_diy_vs_professional_assistance = document.getElementById('al-deportation-section-diy-vs-professional-assistance');
  if (al_deportation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-deportation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_deportation_section_alagoas_specific_context = document.getElementById('al-deportation-section-alagoas-specific-context');
  if (al_deportation_section_alagoas_specific_context) {
    gsap.fromTo('#al-deportation-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_deportation_section_what_our_clients_say = document.getElementById('al-deportation-section-what-our-clients-say');
  if (al_deportation_section_what_our_clients_say) {
    gsap.fromTo('#al-deportation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_deportation_section_frequently_asked_questions = document.getElementById('al-deportation-section-frequently-asked-questions');
  if (al_deportation_section_frequently_asked_questions) {
    gsap.fromTo('#al-deportation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_deportation_section_international_support = document.getElementById('al-deportation-section-international-support');
  if (al_deportation_section_international_support) {
    gsap.fromTo('#al-deportation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_deportation_list_our_credentials = document.getElementById('al-deportation-list-our-credentials');
  if (al_deportation_list_our_credentials) {
    gsap.from('#al-deportation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_deportation_list_related_services = document.getElementById('al-deportation-list-related-services');
  if (al_deportation_list_related_services) {
    gsap.from('#al-deportation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_deportation_section_youre_in_good_hands = document.getElementById('al-deportation-section-youre-in-good-hands');
  if (al_deportation_section_youre_in_good_hands) {
    gsap.fromTo('#al-deportation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_deportation_section_21 = document.getElementById('al-deportation-section-21');
  if (al_deportation_section_21) {
    gsap.fromTo('#al-deportation-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_translation_form_sworn_document_translation_services_in_brazil = document.getElementById('al-translation-form-sworn-document-translation-services-in-brazil');
  if (al_translation_form_sworn_document_translation_services_in_brazil) {
    gsap.from('#al-translation-form-sworn-document-translation-services-in-brazil input, #al-translation-form-sworn-document-translation-services-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_translation_list_quick_facts = document.getElementById('al-translation-list-quick-facts');
  if (al_translation_list_quick_facts) {
    gsap.from('#al-translation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_translation_list_common_challenges_applicants_face = document.getElementById('al-translation-list-common-challenges-applicants-face');
  if (al_translation_list_common_challenges_applicants_face) {
    gsap.from('#al-translation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_translation_list_how_we_solve_these_challenges = document.getElementById('al-translation-list-how-we-solve-these-challenges');
  if (al_translation_list_how_we_solve_these_challenges) {
    gsap.from('#al-translation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_translation_section_service_overview = document.getElementById('al-translation-section-service-overview');
  if (al_translation_section_service_overview) {
    gsap.fromTo('#al-translation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_translation_form_who_is_this_service_for = document.getElementById('al-translation-form-who-is-this-service-for');
  if (al_translation_form_who_is_this_service_for) {
    gsap.from('#al-translation-form-who-is-this-service-for input, #al-translation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_translation_list_required_documents = document.getElementById('al-translation-list-required-documents');
  if (al_translation_list_required_documents) {
    gsap.from('#al-translation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_translation_list_process = document.getElementById('al-translation-list-process');
  if (al_translation_list_process) {
    gsap.from('#al-translation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_translation_section_timelines_deadlines = document.getElementById('al-translation-section-timelines-deadlines');
  if (al_translation_section_timelines_deadlines) {
    gsap.fromTo('#al-translation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_translation_section_fees_costs = document.getElementById('al-translation-section-fees-costs');
  if (al_translation_section_fees_costs) {
    gsap.fromTo('#al-translation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_translation_list_risks_common_mistakes = document.getElementById('al-translation-list-risks-common-mistakes');
  if (al_translation_list_risks_common_mistakes) {
    gsap.from('#al-translation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_translation_section_diy_vs_professional_assistance = document.getElementById('al-translation-section-diy-vs-professional-assistance');
  if (al_translation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-translation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_translation_section_alagoas_specific_context = document.getElementById('al-translation-section-alagoas-specific-context');
  if (al_translation_section_alagoas_specific_context) {
    gsap.fromTo('#al-translation-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_translation_section_what_our_clients_say = document.getElementById('al-translation-section-what-our-clients-say');
  if (al_translation_section_what_our_clients_say) {
    gsap.fromTo('#al-translation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_translation_section_frequently_asked_questions = document.getElementById('al-translation-section-frequently-asked-questions');
  if (al_translation_section_frequently_asked_questions) {
    gsap.fromTo('#al-translation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_translation_section_international_support = document.getElementById('al-translation-section-international-support');
  if (al_translation_section_international_support) {
    gsap.fromTo('#al-translation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_translation_list_our_credentials = document.getElementById('al-translation-list-our-credentials');
  if (al_translation_list_our_credentials) {
    gsap.from('#al-translation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_translation_list_related_services = document.getElementById('al-translation-list-related-services');
  if (al_translation_list_related_services) {
    gsap.from('#al-translation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_translation_section_youre_in_good_hands = document.getElementById('al-translation-section-youre-in-good-hands');
  if (al_translation_section_youre_in_good_hands) {
    gsap.fromTo('#al-translation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_translation_section_21 = document.getElementById('al-translation-section-21');
  if (al_translation_section_21) {
    gsap.fromTo('#al-translation-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_expulsion_form_expulsion_assistance_in_brazil = document.getElementById('al-expulsion-form-expulsion-assistance-in-brazil');
  if (al_expulsion_form_expulsion_assistance_in_brazil) {
    gsap.from('#al-expulsion-form-expulsion-assistance-in-brazil input, #al-expulsion-form-expulsion-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_expulsion_list_quick_facts = document.getElementById('al-expulsion-list-quick-facts');
  if (al_expulsion_list_quick_facts) {
    gsap.from('#al-expulsion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_expulsion_list_common_challenges_applicants_face = document.getElementById('al-expulsion-list-common-challenges-applicants-face');
  if (al_expulsion_list_common_challenges_applicants_face) {
    gsap.from('#al-expulsion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_expulsion_list_how_we_solve_these_challenges = document.getElementById('al-expulsion-list-how-we-solve-these-challenges');
  if (al_expulsion_list_how_we_solve_these_challenges) {
    gsap.from('#al-expulsion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_expulsion_section_service_overview = document.getElementById('al-expulsion-section-service-overview');
  if (al_expulsion_section_service_overview) {
    gsap.fromTo('#al-expulsion-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_expulsion_form_who_is_this_service_for = document.getElementById('al-expulsion-form-who-is-this-service-for');
  if (al_expulsion_form_who_is_this_service_for) {
    gsap.from('#al-expulsion-form-who-is-this-service-for input, #al-expulsion-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_expulsion_list_required_documents = document.getElementById('al-expulsion-list-required-documents');
  if (al_expulsion_list_required_documents) {
    gsap.from('#al-expulsion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_expulsion_list_process = document.getElementById('al-expulsion-list-process');
  if (al_expulsion_list_process) {
    gsap.from('#al-expulsion-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_expulsion_section_timelines_deadlines = document.getElementById('al-expulsion-section-timelines-deadlines');
  if (al_expulsion_section_timelines_deadlines) {
    gsap.fromTo('#al-expulsion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_expulsion_section_fees_costs = document.getElementById('al-expulsion-section-fees-costs');
  if (al_expulsion_section_fees_costs) {
    gsap.fromTo('#al-expulsion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_expulsion_list_risks_common_mistakes = document.getElementById('al-expulsion-list-risks-common-mistakes');
  if (al_expulsion_list_risks_common_mistakes) {
    gsap.from('#al-expulsion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_expulsion_section_diy_vs_professional_assistance = document.getElementById('al-expulsion-section-diy-vs-professional-assistance');
  if (al_expulsion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-expulsion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_expulsion_section_alagoas_specific_context = document.getElementById('al-expulsion-section-alagoas-specific-context');
  if (al_expulsion_section_alagoas_specific_context) {
    gsap.fromTo('#al-expulsion-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_expulsion_section_what_our_clients_say = document.getElementById('al-expulsion-section-what-our-clients-say');
  if (al_expulsion_section_what_our_clients_say) {
    gsap.fromTo('#al-expulsion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_expulsion_section_frequently_asked_questions = document.getElementById('al-expulsion-section-frequently-asked-questions');
  if (al_expulsion_section_frequently_asked_questions) {
    gsap.fromTo('#al-expulsion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_expulsion_section_international_support = document.getElementById('al-expulsion-section-international-support');
  if (al_expulsion_section_international_support) {
    gsap.fromTo('#al-expulsion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_expulsion_list_our_credentials = document.getElementById('al-expulsion-list-our-credentials');
  if (al_expulsion_list_our_credentials) {
    gsap.from('#al-expulsion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_expulsion_list_related_services = document.getElementById('al-expulsion-list-related-services');
  if (al_expulsion_list_related_services) {
    gsap.from('#al-expulsion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_expulsion_section_youre_in_good_hands = document.getElementById('al-expulsion-section-youre-in-good-hands');
  if (al_expulsion_section_youre_in_good_hands) {
    gsap.fromTo('#al-expulsion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_expulsion_section_21 = document.getElementById('al-expulsion-section-21');
  if (al_expulsion_section_21) {
    gsap.fromTo('#al-expulsion-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_appeals_form_appeal_immigration_denials_in_brazil = document.getElementById('al-appeals-form-appeal-immigration-denials-in-brazil');
  if (al_appeals_form_appeal_immigration_denials_in_brazil) {
    gsap.from('#al-appeals-form-appeal-immigration-denials-in-brazil input, #al-appeals-form-appeal-immigration-denials-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_appeals_list_quick_facts = document.getElementById('al-appeals-list-quick-facts');
  if (al_appeals_list_quick_facts) {
    gsap.from('#al-appeals-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_appeals_list_common_challenges_applicants_face = document.getElementById('al-appeals-list-common-challenges-applicants-face');
  if (al_appeals_list_common_challenges_applicants_face) {
    gsap.from('#al-appeals-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_appeals_list_how_we_solve_these_challenges = document.getElementById('al-appeals-list-how-we-solve-these-challenges');
  if (al_appeals_list_how_we_solve_these_challenges) {
    gsap.from('#al-appeals-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_appeals_section_service_overview = document.getElementById('al-appeals-section-service-overview');
  if (al_appeals_section_service_overview) {
    gsap.fromTo('#al-appeals-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_appeals_form_who_is_this_service_for = document.getElementById('al-appeals-form-who-is-this-service-for');
  if (al_appeals_form_who_is_this_service_for) {
    gsap.from('#al-appeals-form-who-is-this-service-for input, #al-appeals-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_appeals_list_required_documents = document.getElementById('al-appeals-list-required-documents');
  if (al_appeals_list_required_documents) {
    gsap.from('#al-appeals-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_appeals_list_appeal_process = document.getElementById('al-appeals-list-appeal-process');
  if (al_appeals_list_appeal_process) {
    gsap.from('#al-appeals-list-appeal-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_appeals_section_timelines_deadlines = document.getElementById('al-appeals-section-timelines-deadlines');
  if (al_appeals_section_timelines_deadlines) {
    gsap.fromTo('#al-appeals-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_appeals_section_fees_costs = document.getElementById('al-appeals-section-fees-costs');
  if (al_appeals_section_fees_costs) {
    gsap.fromTo('#al-appeals-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_appeals_list_risks_common_mistakes = document.getElementById('al-appeals-list-risks-common-mistakes');
  if (al_appeals_list_risks_common_mistakes) {
    gsap.from('#al-appeals-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_appeals_section_diy_vs_professional_assistance = document.getElementById('al-appeals-section-diy-vs-professional-assistance');
  if (al_appeals_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-appeals-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_appeals_section_alagoas_specific_context = document.getElementById('al-appeals-section-alagoas-specific-context');
  if (al_appeals_section_alagoas_specific_context) {
    gsap.fromTo('#al-appeals-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_appeals_section_what_our_clients_say = document.getElementById('al-appeals-section-what-our-clients-say');
  if (al_appeals_section_what_our_clients_say) {
    gsap.fromTo('#al-appeals-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_appeals_section_frequently_asked_questions = document.getElementById('al-appeals-section-frequently-asked-questions');
  if (al_appeals_section_frequently_asked_questions) {
    gsap.fromTo('#al-appeals-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_appeals_section_international_support = document.getElementById('al-appeals-section-international-support');
  if (al_appeals_section_international_support) {
    gsap.fromTo('#al-appeals-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_appeals_list_our_credentials = document.getElementById('al-appeals-list-our-credentials');
  if (al_appeals_list_our_credentials) {
    gsap.from('#al-appeals-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_appeals_list_related_services = document.getElementById('al-appeals-list-related-services');
  if (al_appeals_list_related_services) {
    gsap.from('#al-appeals-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_appeals_section_youre_in_good_hands = document.getElementById('al-appeals-section-youre-in-good-hands');
  if (al_appeals_section_youre_in_good_hands) {
    gsap.fromTo('#al-appeals-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_appeals_section_21 = document.getElementById('al-appeals-section-21');
  if (al_appeals_section_21) {
    gsap.fromTo('#al-appeals-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_consular_form_consular_services_in_brazil_for_citizens = document.getElementById('al-consular-form-consular-services-in-brazil-for-citizens');
  if (al_consular_form_consular_services_in_brazil_for_citizens) {
    gsap.from('#al-consular-form-consular-services-in-brazil-for-citizens input, #al-consular-form-consular-services-in-brazil-for-citizens textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_consular_list_quick_facts = document.getElementById('al-consular-list-quick-facts');
  if (al_consular_list_quick_facts) {
    gsap.from('#al-consular-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_consular_list_common_challenges_applicants_face = document.getElementById('al-consular-list-common-challenges-applicants-face');
  if (al_consular_list_common_challenges_applicants_face) {
    gsap.from('#al-consular-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_consular_list_how_we_solve_these_challenges = document.getElementById('al-consular-list-how-we-solve-these-challenges');
  if (al_consular_list_how_we_solve_these_challenges) {
    gsap.from('#al-consular-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_consular_section_service_overview = document.getElementById('al-consular-section-service-overview');
  if (al_consular_section_service_overview) {
    gsap.fromTo('#al-consular-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_consular_form_who_is_this_service_for = document.getElementById('al-consular-form-who-is-this-service-for');
  if (al_consular_form_who_is_this_service_for) {
    gsap.from('#al-consular-form-who-is-this-service-for input, #al-consular-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_consular_list_required_documents = document.getElementById('al-consular-list-required-documents');
  if (al_consular_list_required_documents) {
    gsap.from('#al-consular-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_consular_list_process = document.getElementById('al-consular-list-process');
  if (al_consular_list_process) {
    gsap.from('#al-consular-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_consular_section_timelines_deadlines = document.getElementById('al-consular-section-timelines-deadlines');
  if (al_consular_section_timelines_deadlines) {
    gsap.fromTo('#al-consular-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_consular_section_fees_costs = document.getElementById('al-consular-section-fees-costs');
  if (al_consular_section_fees_costs) {
    gsap.fromTo('#al-consular-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_consular_list_risks_common_mistakes = document.getElementById('al-consular-list-risks-common-mistakes');
  if (al_consular_list_risks_common_mistakes) {
    gsap.from('#al-consular-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_consular_section_diy_vs_professional_assistance = document.getElementById('al-consular-section-diy-vs-professional-assistance');
  if (al_consular_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-consular-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_consular_section_alagoas_specific_context = document.getElementById('al-consular-section-alagoas-specific-context');
  if (al_consular_section_alagoas_specific_context) {
    gsap.fromTo('#al-consular-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_consular_section_what_our_clients_say = document.getElementById('al-consular-section-what-our-clients-say');
  if (al_consular_section_what_our_clients_say) {
    gsap.fromTo('#al-consular-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_consular_section_frequently_asked_questions = document.getElementById('al-consular-section-frequently-asked-questions');
  if (al_consular_section_frequently_asked_questions) {
    gsap.fromTo('#al-consular-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_consular_section_international_support = document.getElementById('al-consular-section-international-support');
  if (al_consular_section_international_support) {
    gsap.fromTo('#al-consular-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_consular_list_our_credentials = document.getElementById('al-consular-list-our-credentials');
  if (al_consular_list_our_credentials) {
    gsap.from('#al-consular-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_consular_list_related_services = document.getElementById('al-consular-list-related-services');
  if (al_consular_list_related_services) {
    gsap.from('#al-consular-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_consular_section_youre_in_good_hands = document.getElementById('al-consular-section-youre-in-good-hands');
  if (al_consular_section_youre_in_good_hands) {
    gsap.fromTo('#al-consular-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_consular_section_21 = document.getElementById('al-consular-section-21');
  if (al_consular_section_21) {
    gsap.fromTo('#al-consular-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const criminal_records.html = document.getElementById('criminal-records.html');
  if (criminal_records.html) {
    gsap.fromTo('#criminal-records.html', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_criminalrecords_form_obtain_criminal_records_certificate_in_brazil = document.getElementById('al-criminalrecords-form-obtain-criminal-records-certificate-in-brazil');
  if (al_criminalrecords_form_obtain_criminal_records_certificate_in_brazil) {
    gsap.from('#al-criminalrecords-form-obtain-criminal-records-certificate-in-brazil input, #al-criminalrecords-form-obtain-criminal-records-certificate-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_criminalrecords_list_quick_facts = document.getElementById('al-criminalrecords-list-quick-facts');
  if (al_criminalrecords_list_quick_facts) {
    gsap.from('#al-criminalrecords-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_criminalrecords_list_common_challenges_applicants_face = document.getElementById('al-criminalrecords-list-common-challenges-applicants-face');
  if (al_criminalrecords_list_common_challenges_applicants_face) {
    gsap.from('#al-criminalrecords-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_criminalrecords_list_how_we_solve_these_challenges = document.getElementById('al-criminalrecords-list-how-we-solve-these-challenges');
  if (al_criminalrecords_list_how_we_solve_these_challenges) {
    gsap.from('#al-criminalrecords-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_criminalrecords_section_service_overview = document.getElementById('al-criminalrecords-section-service-overview');
  if (al_criminalrecords_section_service_overview) {
    gsap.fromTo('#al-criminalrecords-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_criminalrecords_form_who_is_this_service_for = document.getElementById('al-criminalrecords-form-who-is-this-service-for');
  if (al_criminalrecords_form_who_is_this_service_for) {
    gsap.from('#al-criminalrecords-form-who-is-this-service-for input, #al-criminalrecords-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_criminalrecords_list_required_documents = document.getElementById('al-criminalrecords-list-required-documents');
  if (al_criminalrecords_list_required_documents) {
    gsap.from('#al-criminalrecords-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_criminalrecords_list_process = document.getElementById('al-criminalrecords-list-process');
  if (al_criminalrecords_list_process) {
    gsap.from('#al-criminalrecords-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_criminalrecords_section_timelines_deadlines = document.getElementById('al-criminalrecords-section-timelines-deadlines');
  if (al_criminalrecords_section_timelines_deadlines) {
    gsap.fromTo('#al-criminalrecords-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_criminalrecords_section_fees_costs = document.getElementById('al-criminalrecords-section-fees-costs');
  if (al_criminalrecords_section_fees_costs) {
    gsap.fromTo('#al-criminalrecords-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_criminalrecords_list_risks_common_mistakes = document.getElementById('al-criminalrecords-list-risks-common-mistakes');
  if (al_criminalrecords_list_risks_common_mistakes) {
    gsap.from('#al-criminalrecords-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_criminalrecords_section_diy_vs_professional_assistance = document.getElementById('al-criminalrecords-section-diy-vs-professional-assistance');
  if (al_criminalrecords_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-criminalrecords-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_criminalrecords_section_alagoas_specific_context = document.getElementById('al-criminalrecords-section-alagoas-specific-context');
  if (al_criminalrecords_section_alagoas_specific_context) {
    gsap.fromTo('#al-criminalrecords-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_criminalrecords_section_what_our_clients_say = document.getElementById('al-criminalrecords-section-what-our-clients-say');
  if (al_criminalrecords_section_what_our_clients_say) {
    gsap.fromTo('#al-criminalrecords-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_criminalrecords_section_frequently_asked_questions = document.getElementById('al-criminalrecords-section-frequently-asked-questions');
  if (al_criminalrecords_section_frequently_asked_questions) {
    gsap.fromTo('#al-criminalrecords-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_criminalrecords_section_international_support = document.getElementById('al-criminalrecords-section-international-support');
  if (al_criminalrecords_section_international_support) {
    gsap.fromTo('#al-criminalrecords-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_criminalrecords_list_our_credentials = document.getElementById('al-criminalrecords-list-our-credentials');
  if (al_criminalrecords_list_our_credentials) {
    gsap.from('#al-criminalrecords-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_criminalrecords_list_related_services = document.getElementById('al-criminalrecords-list-related-services');
  if (al_criminalrecords_list_related_services) {
    gsap.from('#al-criminalrecords-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_criminalrecords_section_youre_in_good_hands = document.getElementById('al-criminalrecords-section-youre-in-good-hands');
  if (al_criminalrecords_section_youre_in_good_hands) {
    gsap.fromTo('#al-criminalrecords-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_criminalrecords_section_21 = document.getElementById('al-criminalrecords-section-21');
  if (al_criminalrecords_section_21) {
    gsap.fromTo('#al-criminalrecords-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_extradition_form_extradition_assistance_in_brazil = document.getElementById('al-extradition-form-extradition-assistance-in-brazil');
  if (al_extradition_form_extradition_assistance_in_brazil) {
    gsap.from('#al-extradition-form-extradition-assistance-in-brazil input, #al-extradition-form-extradition-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_extradition_list_quick_facts = document.getElementById('al-extradition-list-quick-facts');
  if (al_extradition_list_quick_facts) {
    gsap.from('#al-extradition-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_extradition_list_common_challenges_applicants_face = document.getElementById('al-extradition-list-common-challenges-applicants-face');
  if (al_extradition_list_common_challenges_applicants_face) {
    gsap.from('#al-extradition-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_extradition_list_how_we_solve_these_challenges = document.getElementById('al-extradition-list-how-we-solve-these-challenges');
  if (al_extradition_list_how_we_solve_these_challenges) {
    gsap.from('#al-extradition-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_extradition_section_service_overview = document.getElementById('al-extradition-section-service-overview');
  if (al_extradition_section_service_overview) {
    gsap.fromTo('#al-extradition-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_extradition_form_who_is_this_service_for = document.getElementById('al-extradition-form-who-is-this-service-for');
  if (al_extradition_form_who_is_this_service_for) {
    gsap.from('#al-extradition-form-who-is-this-service-for input, #al-extradition-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_extradition_list_required_documents = document.getElementById('al-extradition-list-required-documents');
  if (al_extradition_list_required_documents) {
    gsap.from('#al-extradition-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_extradition_list_process = document.getElementById('al-extradition-list-process');
  if (al_extradition_list_process) {
    gsap.from('#al-extradition-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_extradition_section_timelines_deadlines = document.getElementById('al-extradition-section-timelines-deadlines');
  if (al_extradition_section_timelines_deadlines) {
    gsap.fromTo('#al-extradition-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_extradition_section_fees_costs = document.getElementById('al-extradition-section-fees-costs');
  if (al_extradition_section_fees_costs) {
    gsap.fromTo('#al-extradition-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_extradition_list_risks_common_mistakes = document.getElementById('al-extradition-list-risks-common-mistakes');
  if (al_extradition_list_risks_common_mistakes) {
    gsap.from('#al-extradition-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_extradition_section_diy_vs_professional_assistance = document.getElementById('al-extradition-section-diy-vs-professional-assistance');
  if (al_extradition_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-extradition-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_extradition_section_alagoas_specific_context = document.getElementById('al-extradition-section-alagoas-specific-context');
  if (al_extradition_section_alagoas_specific_context) {
    gsap.fromTo('#al-extradition-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_extradition_section_what_our_clients_say = document.getElementById('al-extradition-section-what-our-clients-say');
  if (al_extradition_section_what_our_clients_say) {
    gsap.fromTo('#al-extradition-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_extradition_section_frequently_asked_questions = document.getElementById('al-extradition-section-frequently-asked-questions');
  if (al_extradition_section_frequently_asked_questions) {
    gsap.fromTo('#al-extradition-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_extradition_section_international_support = document.getElementById('al-extradition-section-international-support');
  if (al_extradition_section_international_support) {
    gsap.fromTo('#al-extradition-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_extradition_list_our_credentials = document.getElementById('al-extradition-list-our-credentials');
  if (al_extradition_list_our_credentials) {
    gsap.from('#al-extradition-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_extradition_list_related_services = document.getElementById('al-extradition-list-related-services');
  if (al_extradition_list_related_services) {
    gsap.from('#al-extradition-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_extradition_section_youre_in_good_hands = document.getElementById('al-extradition-section-youre-in-good-hands');
  if (al_extradition_section_youre_in_good_hands) {
    gsap.fromTo('#al-extradition-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_extradition_section_21 = document.getElementById('al-extradition-section-21');
  if (al_extradition_section_21) {
    gsap.fromTo('#al-extradition-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_north_form_discover_the_north_amazon_and_beyond = document.getElementById('al-north-form-discover-the-north-amazon-and-beyond');
  if (al_north_form_discover_the_north_amazon_and_beyond) {
    gsap.from('#al-north-form-discover-the-north-amazon-and-beyond input, #al-north-form-discover-the-north-amazon-and-beyond textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_north_list_quick_facts = document.getElementById('al-north-list-quick-facts');
  if (al_north_list_quick_facts) {
    gsap.from('#al-north-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_north_list_common_challenges_applicants_face = document.getElementById('al-north-list-common-challenges-applicants-face');
  if (al_north_list_common_challenges_applicants_face) {
    gsap.from('#al-north-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_north_list_how_we_solve_these_challenges = document.getElementById('al-north-list-how-we-solve-these-challenges');
  if (al_north_list_how_we_solve_these_challenges) {
    gsap.from('#al-north-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_north_section_trip_overview = document.getElementById('al-north-section-trip-overview');
  if (al_north_section_trip_overview) {
    gsap.fromTo('#al-north-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_north_form_who_is_this_trip_for = document.getElementById('al-north-form-who-is-this-trip-for');
  if (al_north_form_who_is_this_trip_for) {
    gsap.from('#al-north-form-who-is-this-trip-for input, #al-north-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_north_list_required_documents = document.getElementById('al-north-list-required-documents');
  if (al_north_list_required_documents) {
    gsap.from('#al-north-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_north_list_booking_process = document.getElementById('al-north-list-booking-process');
  if (al_north_list_booking_process) {
    gsap.from('#al-north-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_north_section_timelines_deadlines = document.getElementById('al-north-section-timelines-deadlines');
  if (al_north_section_timelines_deadlines) {
    gsap.fromTo('#al-north-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_north_section_fees_costs = document.getElementById('al-north-section-fees-costs');
  if (al_north_section_fees_costs) {
    gsap.fromTo('#al-north-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_north_list_risks_common_mistakes = document.getElementById('al-north-list-risks-common-mistakes');
  if (al_north_list_risks_common_mistakes) {
    gsap.from('#al-north-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_north_section_diy_vs_professional_assistance = document.getElementById('al-north-section-diy-vs-professional-assistance');
  if (al_north_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-north-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_north_section_alagoas_specific_context = document.getElementById('al-north-section-alagoas-specific-context');
  if (al_north_section_alagoas_specific_context) {
    gsap.fromTo('#al-north-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_north_section_what_our_clients_say = document.getElementById('al-north-section-what-our-clients-say');
  if (al_north_section_what_our_clients_say) {
    gsap.fromTo('#al-north-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_north_section_frequently_asked_questions = document.getElementById('al-north-section-frequently-asked-questions');
  if (al_north_section_frequently_asked_questions) {
    gsap.fromTo('#al-north-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_north_section_international_support = document.getElementById('al-north-section-international-support');
  if (al_north_section_international_support) {
    gsap.fromTo('#al-north-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_north_list_our_credentials = document.getElementById('al-north-list-our-credentials');
  if (al_north_list_our_credentials) {
    gsap.from('#al-north-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_north_list_related_services = document.getElementById('al-north-list-related-services');
  if (al_north_list_related_services) {
    gsap.from('#al-north-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_north_section_youre_in_good_hands = document.getElementById('al-north-section-youre-in-good-hands');
  if (al_north_section_youre_in_good_hands) {
    gsap.fromTo('#al-north-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_north_section_21 = document.getElementById('al-north-section-21');
  if (al_north_section_21) {
    gsap.fromTo('#al-north-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const central_west.html = document.getElementById('central-west.html');
  if (central_west.html) {
    gsap.fromTo('#central-west.html', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_centralwest_form_wild_centralwest_pantanal_and_cerrado = document.getElementById('al-centralwest-form-wild-centralwest-pantanal-and-cerrado');
  if (al_centralwest_form_wild_centralwest_pantanal_and_cerrado) {
    gsap.from('#al-centralwest-form-wild-centralwest-pantanal-and-cerrado input, #al-centralwest-form-wild-centralwest-pantanal-and-cerrado textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_centralwest_list_quick_facts = document.getElementById('al-centralwest-list-quick-facts');
  if (al_centralwest_list_quick_facts) {
    gsap.from('#al-centralwest-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_centralwest_list_common_challenges_applicants_face = document.getElementById('al-centralwest-list-common-challenges-applicants-face');
  if (al_centralwest_list_common_challenges_applicants_face) {
    gsap.from('#al-centralwest-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_centralwest_list_how_we_solve_these_challenges = document.getElementById('al-centralwest-list-how-we-solve-these-challenges');
  if (al_centralwest_list_how_we_solve_these_challenges) {
    gsap.from('#al-centralwest-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_centralwest_section_trip_overview = document.getElementById('al-centralwest-section-trip-overview');
  if (al_centralwest_section_trip_overview) {
    gsap.fromTo('#al-centralwest-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_centralwest_form_who_is_this_trip_for = document.getElementById('al-centralwest-form-who-is-this-trip-for');
  if (al_centralwest_form_who_is_this_trip_for) {
    gsap.from('#al-centralwest-form-who-is-this-trip-for input, #al-centralwest-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_centralwest_list_required_documents = document.getElementById('al-centralwest-list-required-documents');
  if (al_centralwest_list_required_documents) {
    gsap.from('#al-centralwest-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_centralwest_list_booking_process = document.getElementById('al-centralwest-list-booking-process');
  if (al_centralwest_list_booking_process) {
    gsap.from('#al-centralwest-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_centralwest_section_timelines_deadlines = document.getElementById('al-centralwest-section-timelines-deadlines');
  if (al_centralwest_section_timelines_deadlines) {
    gsap.fromTo('#al-centralwest-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_centralwest_section_fees_costs = document.getElementById('al-centralwest-section-fees-costs');
  if (al_centralwest_section_fees_costs) {
    gsap.fromTo('#al-centralwest-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_centralwest_list_risks_common_mistakes = document.getElementById('al-centralwest-list-risks-common-mistakes');
  if (al_centralwest_list_risks_common_mistakes) {
    gsap.from('#al-centralwest-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_centralwest_section_diy_vs_professional_assistance = document.getElementById('al-centralwest-section-diy-vs-professional-assistance');
  if (al_centralwest_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-centralwest-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_centralwest_section_alagoas_specific_context = document.getElementById('al-centralwest-section-alagoas-specific-context');
  if (al_centralwest_section_alagoas_specific_context) {
    gsap.fromTo('#al-centralwest-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_centralwest_section_what_our_clients_say = document.getElementById('al-centralwest-section-what-our-clients-say');
  if (al_centralwest_section_what_our_clients_say) {
    gsap.fromTo('#al-centralwest-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_centralwest_section_frequently_asked_questions = document.getElementById('al-centralwest-section-frequently-asked-questions');
  if (al_centralwest_section_frequently_asked_questions) {
    gsap.fromTo('#al-centralwest-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_centralwest_section_international_support = document.getElementById('al-centralwest-section-international-support');
  if (al_centralwest_section_international_support) {
    gsap.fromTo('#al-centralwest-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_centralwest_list_our_credentials = document.getElementById('al-centralwest-list-our-credentials');
  if (al_centralwest_list_our_credentials) {
    gsap.from('#al-centralwest-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_centralwest_list_related_services = document.getElementById('al-centralwest-list-related-services');
  if (al_centralwest_list_related_services) {
    gsap.from('#al-centralwest-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_centralwest_section_youre_in_good_hands = document.getElementById('al-centralwest-section-youre-in-good-hands');
  if (al_centralwest_section_youre_in_good_hands) {
    gsap.fromTo('#al-centralwest-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_centralwest_section_21 = document.getElementById('al-centralwest-section-21');
  if (al_centralwest_section_21) {
    gsap.fromTo('#al-centralwest-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_southeast_form_dynamic_southeast_cities_and_history = document.getElementById('al-southeast-form-dynamic-southeast-cities-and-history');
  if (al_southeast_form_dynamic_southeast_cities_and_history) {
    gsap.from('#al-southeast-form-dynamic-southeast-cities-and-history input, #al-southeast-form-dynamic-southeast-cities-and-history textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_southeast_list_quick_facts = document.getElementById('al-southeast-list-quick-facts');
  if (al_southeast_list_quick_facts) {
    gsap.from('#al-southeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_southeast_list_common_challenges_applicants_face = document.getElementById('al-southeast-list-common-challenges-applicants-face');
  if (al_southeast_list_common_challenges_applicants_face) {
    gsap.from('#al-southeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_southeast_list_how_we_solve_these_challenges = document.getElementById('al-southeast-list-how-we-solve-these-challenges');
  if (al_southeast_list_how_we_solve_these_challenges) {
    gsap.from('#al-southeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_southeast_section_trip_overview = document.getElementById('al-southeast-section-trip-overview');
  if (al_southeast_section_trip_overview) {
    gsap.fromTo('#al-southeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_southeast_form_who_is_this_trip_for = document.getElementById('al-southeast-form-who-is-this-trip-for');
  if (al_southeast_form_who_is_this_trip_for) {
    gsap.from('#al-southeast-form-who-is-this-trip-for input, #al-southeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_southeast_list_required_documents = document.getElementById('al-southeast-list-required-documents');
  if (al_southeast_list_required_documents) {
    gsap.from('#al-southeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_southeast_list_booking_process = document.getElementById('al-southeast-list-booking-process');
  if (al_southeast_list_booking_process) {
    gsap.from('#al-southeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_southeast_section_timelines_deadlines = document.getElementById('al-southeast-section-timelines-deadlines');
  if (al_southeast_section_timelines_deadlines) {
    gsap.fromTo('#al-southeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_southeast_section_fees_costs = document.getElementById('al-southeast-section-fees-costs');
  if (al_southeast_section_fees_costs) {
    gsap.fromTo('#al-southeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_southeast_list_risks_common_mistakes = document.getElementById('al-southeast-list-risks-common-mistakes');
  if (al_southeast_list_risks_common_mistakes) {
    gsap.from('#al-southeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_southeast_section_diy_vs_professional_assistance = document.getElementById('al-southeast-section-diy-vs-professional-assistance');
  if (al_southeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-southeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_southeast_section_alagoas_specific_context = document.getElementById('al-southeast-section-alagoas-specific-context');
  if (al_southeast_section_alagoas_specific_context) {
    gsap.fromTo('#al-southeast-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_southeast_section_what_our_clients_say = document.getElementById('al-southeast-section-what-our-clients-say');
  if (al_southeast_section_what_our_clients_say) {
    gsap.fromTo('#al-southeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_southeast_section_frequently_asked_questions = document.getElementById('al-southeast-section-frequently-asked-questions');
  if (al_southeast_section_frequently_asked_questions) {
    gsap.fromTo('#al-southeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_southeast_section_international_support = document.getElementById('al-southeast-section-international-support');
  if (al_southeast_section_international_support) {
    gsap.fromTo('#al-southeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_southeast_list_our_credentials = document.getElementById('al-southeast-list-our-credentials');
  if (al_southeast_list_our_credentials) {
    gsap.from('#al-southeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_southeast_list_related_services = document.getElementById('al-southeast-list-related-services');
  if (al_southeast_list_related_services) {
    gsap.from('#al-southeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_southeast_section_youre_in_good_hands = document.getElementById('al-southeast-section-youre-in-good-hands');
  if (al_southeast_section_youre_in_good_hands) {
    gsap.fromTo('#al-southeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_southeast_section_21 = document.getElementById('al-southeast-section-21');
  if (al_southeast_section_21) {
    gsap.fromTo('#al-southeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_northeast_form_vibrant_northeast_beaches_and_culture = document.getElementById('al-northeast-form-vibrant-northeast-beaches-and-culture');
  if (al_northeast_form_vibrant_northeast_beaches_and_culture) {
    gsap.from('#al-northeast-form-vibrant-northeast-beaches-and-culture input, #al-northeast-form-vibrant-northeast-beaches-and-culture textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_northeast_list_quick_facts = document.getElementById('al-northeast-list-quick-facts');
  if (al_northeast_list_quick_facts) {
    gsap.from('#al-northeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_northeast_list_common_challenges_applicants_face = document.getElementById('al-northeast-list-common-challenges-applicants-face');
  if (al_northeast_list_common_challenges_applicants_face) {
    gsap.from('#al-northeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_northeast_list_how_we_solve_these_challenges = document.getElementById('al-northeast-list-how-we-solve-these-challenges');
  if (al_northeast_list_how_we_solve_these_challenges) {
    gsap.from('#al-northeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_northeast_section_trip_overview = document.getElementById('al-northeast-section-trip-overview');
  if (al_northeast_section_trip_overview) {
    gsap.fromTo('#al-northeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_northeast_form_who_is_this_trip_for = document.getElementById('al-northeast-form-who-is-this-trip-for');
  if (al_northeast_form_who_is_this_trip_for) {
    gsap.from('#al-northeast-form-who-is-this-trip-for input, #al-northeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_northeast_list_required_documents = document.getElementById('al-northeast-list-required-documents');
  if (al_northeast_list_required_documents) {
    gsap.from('#al-northeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_northeast_list_booking_process = document.getElementById('al-northeast-list-booking-process');
  if (al_northeast_list_booking_process) {
    gsap.from('#al-northeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_northeast_section_timelines_deadlines = document.getElementById('al-northeast-section-timelines-deadlines');
  if (al_northeast_section_timelines_deadlines) {
    gsap.fromTo('#al-northeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_northeast_section_fees_costs = document.getElementById('al-northeast-section-fees-costs');
  if (al_northeast_section_fees_costs) {
    gsap.fromTo('#al-northeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_northeast_list_risks_common_mistakes = document.getElementById('al-northeast-list-risks-common-mistakes');
  if (al_northeast_list_risks_common_mistakes) {
    gsap.from('#al-northeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_northeast_section_diy_vs_professional_assistance = document.getElementById('al-northeast-section-diy-vs-professional-assistance');
  if (al_northeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-northeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_northeast_section_alagoas_specific_context = document.getElementById('al-northeast-section-alagoas-specific-context');
  if (al_northeast_section_alagoas_specific_context) {
    gsap.fromTo('#al-northeast-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_northeast_section_what_our_clients_say = document.getElementById('al-northeast-section-what-our-clients-say');
  if (al_northeast_section_what_our_clients_say) {
    gsap.fromTo('#al-northeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_northeast_section_frequently_asked_questions = document.getElementById('al-northeast-section-frequently-asked-questions');
  if (al_northeast_section_frequently_asked_questions) {
    gsap.fromTo('#al-northeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_northeast_section_international_support = document.getElementById('al-northeast-section-international-support');
  if (al_northeast_section_international_support) {
    gsap.fromTo('#al-northeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_northeast_list_our_credentials = document.getElementById('al-northeast-list-our-credentials');
  if (al_northeast_list_our_credentials) {
    gsap.from('#al-northeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_northeast_list_related_services = document.getElementById('al-northeast-list-related-services');
  if (al_northeast_list_related_services) {
    gsap.from('#al-northeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_northeast_section_youre_in_good_hands = document.getElementById('al-northeast-section-youre-in-good-hands');
  if (al_northeast_section_youre_in_good_hands) {
    gsap.fromTo('#al-northeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_northeast_section_21 = document.getElementById('al-northeast-section-21');
  if (al_northeast_section_21) {
    gsap.fromTo('#al-northeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_south_form_charming_south_wine_and_gauchos = document.getElementById('al-south-form-charming-south-wine-and-gauchos');
  if (al_south_form_charming_south_wine_and_gauchos) {
    gsap.from('#al-south-form-charming-south-wine-and-gauchos input, #al-south-form-charming-south-wine-and-gauchos textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_south_list_quick_facts = document.getElementById('al-south-list-quick-facts');
  if (al_south_list_quick_facts) {
    gsap.from('#al-south-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_south_list_common_challenges_applicants_face = document.getElementById('al-south-list-common-challenges-applicants-face');
  if (al_south_list_common_challenges_applicants_face) {
    gsap.from('#al-south-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_south_list_how_we_solve_these_challenges = document.getElementById('al-south-list-how-we-solve-these-challenges');
  if (al_south_list_how_we_solve_these_challenges) {
    gsap.from('#al-south-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_south_section_trip_overview = document.getElementById('al-south-section-trip-overview');
  if (al_south_section_trip_overview) {
    gsap.fromTo('#al-south-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_south_form_who_is_this_trip_for = document.getElementById('al-south-form-who-is-this-trip-for');
  if (al_south_form_who_is_this_trip_for) {
    gsap.from('#al-south-form-who-is-this-trip-for input, #al-south-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_south_list_required_documents = document.getElementById('al-south-list-required-documents');
  if (al_south_list_required_documents) {
    gsap.from('#al-south-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_south_list_booking_process = document.getElementById('al-south-list-booking-process');
  if (al_south_list_booking_process) {
    gsap.from('#al-south-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_south_section_timelines_deadlines = document.getElementById('al-south-section-timelines-deadlines');
  if (al_south_section_timelines_deadlines) {
    gsap.fromTo('#al-south-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_south_section_fees_costs = document.getElementById('al-south-section-fees-costs');
  if (al_south_section_fees_costs) {
    gsap.fromTo('#al-south-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_south_list_risks_common_mistakes = document.getElementById('al-south-list-risks-common-mistakes');
  if (al_south_list_risks_common_mistakes) {
    gsap.from('#al-south-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_south_section_diy_vs_professional_assistance = document.getElementById('al-south-section-diy-vs-professional-assistance');
  if (al_south_section_diy_vs_professional_assistance) {
    gsap.fromTo('#al-south-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_south_section_alagoas_specific_context = document.getElementById('al-south-section-alagoas-specific-context');
  if (al_south_section_alagoas_specific_context) {
    gsap.fromTo('#al-south-section-alagoas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_south_section_what_our_clients_say = document.getElementById('al-south-section-what-our-clients-say');
  if (al_south_section_what_our_clients_say) {
    gsap.fromTo('#al-south-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_south_section_frequently_asked_questions = document.getElementById('al-south-section-frequently-asked-questions');
  if (al_south_section_frequently_asked_questions) {
    gsap.fromTo('#al-south-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_south_section_international_support = document.getElementById('al-south-section-international-support');
  if (al_south_section_international_support) {
    gsap.fromTo('#al-south-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_south_list_our_credentials = document.getElementById('al-south-list-our-credentials');
  if (al_south_list_our_credentials) {
    gsap.from('#al-south-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_south_list_related_services = document.getElementById('al-south-list-related-services');
  if (al_south_list_related_services) {
    gsap.from('#al-south-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_south_section_youre_in_good_hands = document.getElementById('al-south-section-youre-in-good-hands');
  if (al_south_section_youre_in_good_hands) {
    gsap.fromTo('#al-south-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

  const al_south_section_21 = document.getElementById('al-south-section-21');
  if (al_south_section_21) {
    gsap.fromTo('#al-south-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'linear'});
  }

    })
    .catch(error => console.error('Error loading js_data.json:', error));
});
