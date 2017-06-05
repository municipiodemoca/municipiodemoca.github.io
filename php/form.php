<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    $from = 'From: municipiodemoca.com'; 
    $to = 'efrainvalentin43@gmail.com'; 
    $subject = 'Email Inquiry';

    $body = "From: $name\n E-Mail: $email\n Phone Number: $phone\n Message:\n $message";
?>

<?php
if ($_POST['submit']) {
    if (mail ($to, $subject, $body, $from)) { 
        echo '<p>¡Gracias por tu mensaje!</p>';
    } else { 
        echo '<p>Oops! Ha ocurrido un error. Env&iacute;e su mensaje nuevamente.</p>'; 
    }
}
?>