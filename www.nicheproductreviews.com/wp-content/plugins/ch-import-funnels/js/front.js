jQuery(document).ready(function($) {
    // jQuery(document).on('click', '.chif-import-funnel', function(e) {
    jQuery(".chif-import-funnel").click(function(e) {
        e.preventDefault();
        var $this = jQuery(this);
        var funnel_id = jQuery('#chif-funnel-id').val();
        var site_id = $this.attr('data-site-id');
        if (confirm('Are you sure?')) {
            chif_do_import_funnel(funnel_id, site_id);
        }
    });

});

function chif_do_import_funnel(funnel_id, site_id) {
    jQuery('#selectsitei').hide();
    jQuery('#importphase1').hide();
    jQuery('#funnel-result').html('Importing...').show();
    var data = {
        action: 'chai_do_import_funnel',
        funnel_id: funnel_id,
        site_id: site_id
    };

    jQuery.post(chif_ajax_object.ajax_url, data, function(response) {
        jQuery('#funnel-result').html(response).show();
    });
}