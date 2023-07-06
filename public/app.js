function signOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // 로그아웃 성공
        console.log("User signed out.");
        window.location.href = "index.html"; 
      })
      .catch((error) => {
        // 로그아웃 실패 또는 오류 처리
        console.log("로그아웃 에러:", error.message);
      });
  }

  function handleAmountChange(amount) {
    const totalSpan = document.getElementById('total-donation');
    totalSpan.innerText = amount;
  }

  document.addEventListener("DOMContentLoaded", function() {
    var oneThousandButton = document.getElementById("Button1000");
    var fiveThousandButton = document.getElementById("Button5000");
    var tenThousandButton = document.getElementById("Button10000");
    var donateButton = document.getElementById("donateButton");
    var donationAmountInput = document.getElementById("donationAmountInput");
    var imageElement = document.querySelector(".modal-body img");
    var totalDonationText = document.getElementById("totalDonationText");
    var totalDonation = 0;

    if (oneThousandButton) {
      oneThousandButton.addEventListener("click", function() {
        document.getElementById("donationAmountInput").value = 1000;
      });
    }

    if (fiveThousandButton) {
      fiveThousandButton.addEventListener("click", function() {
        document.getElementById("donationAmountInput").value = 5000;
      });
    }

    if (tenThousandButton) {
      tenThousandButton.addEventListener("click", function() {
        document.getElementById("donationAmountInput").value = 10000;
      });
    }

    if (donateButton) {
      donateButton.addEventListener("click", function(event) {
        event.preventDefault();

        var donation = parseInt(donationAmountInput.value);

        if (!isNaN(donation)) {
          totalDonation += donation;

          if (totalDonation > 20000) {
            imageElement.src = "images/green.webp"; 
            imageElement.alt = "new image";
          }

          totalDonationText.textContent = totalDonation + " 원";
        } else {
          alert("금액을 입력하세요");
        }
      });
    }

  });


  window.onload = function() {
    const amountInput = document.getElementById('amount');
    const confirmButton = document.getElementById('confirm-button');
    const modal = new bootstrap.Modal(document.getElementById('donationModal'));
  
    amountInput.addEventListener('keyup', function(e) {
      handleAmountChange(e.target.value);
    });

    confirmButton.addEventListener('click', function() {
      modal.hide();
    });
  }
