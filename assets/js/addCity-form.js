// For Add or Remove Flight Multi City Option Start
$(document).ready(function () {
    $("#addMulticityRow").on('click', (function () {
        let a = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);

        if (document.querySelectorAll('.multi_city_form').length === 3) {
            alert("Max City Limit Reached!!")
            return;
        }
        $(".multi_city_form_wrapper").append(`<div class="multi_city_form">
        <div class="row">
           <div class="col-12 col-md-6 ps-0 mb-2 pe-0 pe-md-2">
              <div class="form-group">
                 <label class="form-label mb-0 text-uppercase">From</label>
                 <input type="text" class="form-control" placeholder="New Delhi">
                 <p class="text-truncate font-small theme-text-accent-one mb-0">
                    DEL,
                    Delhi Airport India
                 </p>
              </div>
           </div>
           <div class="col-12 col-md-6 ps-0 mb-2 pe-0">
              <div class="form-group">
                 <label class="form-label mb-0 text-uppercase">To</label>
                 <input type="text" class="form-control" placeholder="London">
                 <p class="text-truncate font-small theme-text-accent-one mb-0">
                    LHR,
                    Heathrow Airport
                 </p>
              </div>
           </div>
           <div class="col-12 col-md-6 ps-0 mb-2 pe-0 pe-md-2">
              <div class="form-group">
                 <label class="form-label mb-0 text-uppercase">Departure<i
                    class="bi bi-chevron-down theme-text-primary ps-2"></i></label>
                 <input type="text" class="form-control" placeholder="07 Aug 22"
                    id="datepicker3">
                 <p class="text-truncate font-small theme-text-accent-one mb-0">
                    Sunday
                 </p>
              </div>
           </div>
           <div class="col-lg-12 col-xl-3 align-self-center">
              <div class="multi_form_remove">
                 <button type="button" id="remove_multi_city" class="btn"><i class="bi bi-x"></i> Remove</button>
              </div>
           </div>
        </div>
     </div>`);

    }))
    // Remove Button Click 
    $(document).on('click', (function (e) {
        if (e.target.id === "remove_multi_city") {
            $(e.target).parent().closest('.multi_city_form').remove()
        }
    })

    )

});

// For Add or Remove Flight Multi City Option Start - Modify search
$(document).ready(function () {
    $("#addMulticityRowModify").on('click', (function () {
        let a = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);

        if (document.querySelectorAll('.multi_city_form_Modify').length === 3) {
            alert("Max City Limit Reached!!")
            return;
        }
        $(".multi_city_form_Modify_wrapper").append(`<div class="multi_city_form_Modify">
        <div class="col mt-3">
           <div class="row mx-0">
              <div class="col-12 col-md-5">
                 <div class="row">
                    <div
                       class="col-12 col-md-6 ps-0 pe-0 pe-md-2 mb-2 mb-md-0">
                       <div class="form-group">
                          <i class="bi bi-geo-alt pos"></i>
                          <input type="text" class="form-control"
                             placeholder="New Delhi">
                       </div>
                    </div>
                    <div
                       class="col-12 col-md-6 ps-0 pe-0 pe-md-2 mb-2 mb-md-0">
                       <div class="form-group">
                          <i class="bi bi-geo-alt pos"></i>
                          <input type="text" class="form-control"
                             placeholder="London">
                       </div>
                    </div>
                 </div>
              </div>
              <div class="col-12 col-md-7">
                 <div class="row">
                    <div
                       class="col-12 col-md-3 ps-0 pe-0 pe-md-2 mb-2 mb-md-0">
                       <div class="form-group">
                          <i class="bi bi-calendar-week pos"></i>
                          <input type="text" class="form-control"
                             placeholder="Tue 07 Aug 22" id="datepicker">
                       </div>
                    </div>
                    <div
                       class="col-12 col-md-6 ps-0 pe-0 pe-md-2 mb-2 mb-md-0">
                       <div class="form-group form-group-custom">
                          <div class="row align-items-start">
                             <div class="col pe-0">
                                <span
                                   class="font-small fw-bold">Adult</span>
                                <div
                                   class="input-group plus-minus-input">
                                   <div class="input-group-button">
                                      <button type="button"
                                         class="circle"
                                         data-quantity="minus"
                                         data-field="onewayAdult">
                                      <i class="bi bi-dash"></i>
                                      </button>
                                   </div>
                                   <input class="input-group-field"
                                      type="number" name="onewayAdult"
                                      value="0">
                                   <div
                                      class="input-group-button plus">
                                      <button type="button"
                                         class="circle"
                                         data-quantity="plus"
                                         data-field="onewayAdult">
                                      <i class="bi bi-plus"></i>
                                      </button>
                                   </div>
                                </div>
                             </div>
                             <div class="col pe-0">
                                <span
                                   class="font-small fw-bold">Child</span>
                                <div
                                   class="input-group plus-minus-input">
                                   <div class="input-group-button">
                                      <button type="button"
                                         class="circle"
                                         data-quantity="minus"
                                         data-field="onewayChild">
                                      <i class="bi bi-dash"></i>
                                      </button>
                                   </div>
                                   <input class="input-group-field"
                                      type="number" name="onewayChild"
                                      value="0">
                                   <div
                                      class="input-group-button plus">
                                      <button type="button"
                                         class="circle"
                                         data-quantity="plus"
                                         data-field="onewayChild">
                                      <i class="bi bi-plus"></i>
                                      </button>
                                   </div>
                                </div>
                             </div>
                             <div class="col pe-0">
                                <span
                                   class="font-small fw-bold">Infant</span>
                                <div
                                   class="input-group plus-minus-input">
                                   <div class="input-group-button">
                                      <button type="button"
                                         class="circle"
                                         data-quantity="minus"
                                         data-field="onewayInfant">
                                      <i class="bi bi-dash"></i>
                                      </button>
                                   </div>
                                   <input class="input-group-field"
                                      type="number"
                                      name="onewayInfant" value="0">
                                   <div
                                      class="input-group-button plus">
                                      <button type="button"
                                         class="circle"
                                         data-quantity="plus"
                                         data-field="onewayInfant">
                                      <i class="bi bi-plus"></i>
                                      </button>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                    <div class="col-12 col-md-3 ps-0 mb-2 mb-md-0 align-self-center text-end">
                       <div class="multi_form_remove">
                          <button type="button" id="remove_multi_city_Modify" class="btn"><i class="bi bi-x"></i> Remove</button>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>`);

    }))
    // Remove Button Click 
    $(document).on('click', (function (e) {
        if (e.target.id === "remove_multi_city_Modify") {
            $(e.target).parent().closest('.multi_city_form_Modify').remove()
        }
    })

    )

});