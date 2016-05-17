<div id="contact-wrapper">
    <div class="container">
        <div class="our-location">
            <h2>Our Location</h2>
            <div id="map-location">
                <div id="map"></div>
                <div id="address">487 South Orem Boulevard, Orem, UT, United States
                </div>
            </div>
            <br>
            <br>
            <ul>
                <li>Luis Carter</li>
                <li>487 South Orem Boulevard</li>
                <li>Orem, UT, United States</li>
                <li>+1 801.831.8883</li>
                <li><a href="mailto:lcarter@sunhorizonenergy.com">lcarter@sunhorizonenergy.com</a></li>
            </ul>
        </div>
        <div class="get-in-touch">
            <h2>Get In Touch</h2>
            <form class="email-form">
                Name: *
                <br>
                <input type="text" name="Name" label="Name" ng-model="emailName"><i class="fa fa-times" ng-show="!emailName"></i><i class="fa fa-check-circle" ng-show="emailName"></i>
                Email: *
                <br>
                <input type="text" name="Email" label="Email" ng-model="emailAddress" ng-keyup="isEmail(emailAddress)"><i class="fa fa-times" ng-show="!isValidEmail"></i><i class="fa fa-check-circle" ng-show="isValidEmail"></i>
                <input id="updates-checkbox" type="checkbox" label="updates"><span> Check here to receive email updates</span>
                <br>
                Subject: *
                <br>
                <input type="text" name="Subject" label="Subject" ng-model="emailSubject"><i class="fa fa-times" ng-show="!emailSubject"></i><i class="fa fa-check-circle" ng-show="emailSubject"></i>
                Message: *
                <br>
                <textarea name="message" ng-model="emailMessage"></textarea><i class="fa fa-times" ng-show="!emailMessage"></i><i class="fa fa-check-circle" ng-show="emailMessage"></i>
                <br>
                <br>
                <input type="submit" name="Submit" label="Submit" class="btn" ng-click="emailSubmit()">
            </form>
        </div>
    </div>
</div>