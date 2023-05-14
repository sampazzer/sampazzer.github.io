function read_data_js() {
    let form_name = document.getElementById('user_value_input');
    let formData = new FormData(form_name);

    //calculation for 4...20mA selection
    if (formData.get('loop_type') == '4_20mA'){
        let calculation_4_20 = 0;
        console.log("I am 4...20mA");
        let range_difference = Math.abs(formData.get('low_range') - formData.get('high_range'));
        console.log(range_difference);
        let loop_difference = 16;
        if (formData.get('input_selection') == 'PV'){
            calculation_4_20 = ((loop_difference / range_difference) * (formData.get('input_value')-formData.get('low_range'))) + 4;
            document.getElementById("answer").innerHTML = calculation_4_20 + " mA";
        }
        else if (formData.get('input_selection') == 'analogue'){
            calculation_4_20 = ((range_difference / loop_difference) * (formData.get('input_value') - 4))-formData.get('high_range');
            document.getElementById("answer").innerHTML = calculation_4_20 + " Units";
        }
    }
    //calculation for 0...20mA selection
    if (formData.get('loop_type') == '0_20mA'){
        let calculation_0_20 = 0;
        console.log("I am 0...20mA");
        let range_difference = Math.abs(formData.get('low_range') - formData.get('high_range'));
        console.log(range_difference);
        let loop_difference = 20;
        if (formData.get('input_selection') == 'PV'){
            calculation_0_20 = (loop_difference / range_difference) * (formData.get('input_value')-formData.get('low_range'));
            document.getElementById("answer").innerHTML = calculation_0_20 + " mA";
        }
        else if (formData.get('input_selection') == 'analogue'){
            calculation_0_20 = (range_difference / loop_difference) * (formData.get('input_value'))-formData.get('high_range');
            document.getElementById("answer").innerHTML = calculation_0_20 + " Units";
        }
    }
    //calculation for 0...10V selection
    if (formData.get('loop_type') == '0_10V'){
        let calculation_0_10 = 0;
        console.log("I am 0...20mA");
        let range_difference = Math.abs(formData.get('low_range') - formData.get('high_range'));
        console.log(range_difference);
        let loop_difference = 10;
        if (formData.get('input_selection') == 'PV'){
            calculation_0_10 = (loop_difference / range_difference) * (formData.get('input_value')-formData.get('low_range'));
            document.getElementById("answer").innerHTML = calculation_0_10 + " V";
        }
        else if (formData.get('input_selection') == 'analogue'){
            calculation_0_10 = (range_difference / loop_difference) * (formData.get('input_value'))-formData.get('high_range');
            document.getElementById("answer").innerHTML = calculation_0_10 + " Units";
        }
    }
}
