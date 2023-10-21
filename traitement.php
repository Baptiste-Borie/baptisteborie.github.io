<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $name = $_POST["user_name"];
    $email = $_POST["user_email"];
    $message = $_POST["user_message"];

    // Adresse e-mail de destination
    $to = "baptisteboriepro@gmail.com";

    // Sujet de l'e-mail
    $subject = "Nouveau message de $name";

    // Corps de l'e-mail
    $message_body = "Nom : $name\n";
    $message_body .= "E-mail : $email\n";
    $message_body .= "Message :\n$message";

    // En-têtes de l'e-mail
    $headers = "De : $email";

    // Envoyer l'e-mail
    if (mail($to, $subject, $message_body, $headers)) {
        echo "Votre message a été envoyé avec succès.";
    } else {
        echo "Une erreur s'est produite lors de l'envoi de votre message.";
    }
}
?>