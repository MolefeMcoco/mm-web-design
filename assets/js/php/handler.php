<?php // Check if form was submitted:
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['recaptcha_response'])) {

    // Build POST request:
    $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
    $recaptcha_secret = 'YOUR_RECAPTCHA_SECRET_KEY';
    $recaptcha_response = $_POST['recaptcha_response'];

    // Make and decode POST request:
    $recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response);
    $recaptcha = json_decode($recaptcha);

    // Take action based on the score returned:
    if ($recaptcha->score >= 0.5) {
        // Verified - send email
		ini_set('display_errors', 1);
		ini_set('display_startup_errors', 1);
		error_reporting(E_ALL);
		/*
		Tested working with PHP5.4 and above (including PHP 7 )

		 */
		require_once './vendor/autoload.php';

		use FormGuide\Handlx\FormHandler;


		$pp = new FormHandler(); 

		$validator = $pp->getValidator();
		$validator->fields(['Name','Email'])->areRequired()->maxLength(50);
		$validator->field('phone_number')->maxLength(13);
		$validator->field('body')->maxLength(6000);




		$pp->sendEmailTo('molefe@mmwebdesign.co.za'); // ← Your email here

		echo $pp->process($_POST);
    } else {
        // Not verified - show form error
    }

} ?>