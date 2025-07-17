 
    document.addEventListener("DOMContentLoaded", () => {
      const detailsList = document.querySelectorAll(".faq details");

      detailsList.forEach((detail) => {
        detail.addEventListener("toggle", () => {
          if (detail.open) {
            detailsList.forEach((otherDetail) => {
              if (otherDetail !== detail) {
                otherDetail.removeAttribute("open");
              }
            });
          }
        });
      });
    });
