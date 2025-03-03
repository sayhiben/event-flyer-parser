import React from 'react';

export function PostFlyerModal({ smsLink, emailLink }) {
  return (
    <div
      class="hidden fixed inset-0 items-center z-9900 text-stone-500 dark:text-stone-50"
      id="submitNewEventModal"
    >
      <div id="modalBackdrop" class="backdrop-brightness-50 flex h-full w-full inset-0 bg-opacity-50 justify-center items-center z-9910 backdrop-blur-md">
        <div class="bg-stone-50 dark:bg-gray-800 rounded-lg w-2/3 lg:w-1/3  z-9920">
          <div class="border-b border-stone-200 dark:border-gray-700 p-4 flex justify-between items-start">
            <div class="flex flex-col">
              <h1 class="text-lg text-stone-500 dark:text-stone-50 font-semibold">Post a Flyer</h1>
            </div>
            <button
              type="button"
              id="closeModalButton"
              aria-label="Close"
              class="text-2xl cursor-pointer"
            >
              &times;
            </button>
          </div>

          <div class="border-b border-stone-200 dark:border-gray-700 p-4 flex flex-col items-center gap-2 text-sm antialiased font-sans text-left">
            <p>This is an automated system with human moderators. Please observe the following rules:</p>
            <ul className="list-disc list-inside">
              <li>Image files only.</li>
              <li>One image per submission.</li>
              <li>No receipt confirmations are sent.</li>
              <li>Submit each image only once.</li>
              <li>Site updates about every 6 hours.</li>
              <li>Abuse is logged, blocked, and reported.</li>
            </ul>
            <p>Mistakes must be fixed by site admins. Please use the <strong>Report</strong> button on a flyer to report issues.</p>
          </div>
 
          <div class="p-4">
            <div class="space-y-2">
              <a href={smsLink} class="cursor-pointer inline-flex w-full gap-2 items-center justify-center border align-middle text-center text-sm py-2 px-4 shadow-sm bg-stone-200 relative border-stone-200 text-stone-700 rounded-lg">
                <svg className="w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 13.5V7.5M9 10.5H15M7 18V20.3355C7 20.8684 7 21.1348 7.10923 21.2716C7.20422 21.3906 7.34827 21.4599 7.50054 21.4597C7.67563 21.4595 7.88367 21.2931 8.29976 20.9602L10.6852 19.0518C11.1725 18.662 11.4162 18.4671 11.6875 18.3285C11.9282 18.2055 12.1844 18.1156 12.4492 18.0613C12.7477 18 13.0597 18 13.6837 18H16.2C17.8802 18 18.7202 18 19.362 17.673C19.9265 17.3854 20.3854 16.9265 20.673 16.362C21 15.7202 21 14.8802 21 13.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V14C3 14.93 3 15.395 3.10222 15.7765C3.37962 16.8117 4.18827 17.6204 5.22354 17.8978C5.60504 18 6.07003 18 7 18Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p class="font-sans text-base text-inherit font-semibold">Send Image with SMS</p>
              </a>
              <a href={emailLink} class="cursor-pointer inline-flex w-full gap-2 items-center justify-center border align-middle text-center text-sm py-2 px-4 shadow-sm bg-stone-200 relative border-stone-200 text-stone-700 rounded-lg">
                <svg className="w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.5 18L14.8571 12M9.14286 12L2.50003 18M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p class="font-sans text-base text-inherit font-semibold">Send Image with Email</p>
              </a>
            </div>
          </div>

          <div class="border-t border-stone-200 dark:border-gray-700 p-4 flex flex-col items-center gap-2">
            <small class="font-sans antialiased text-sm text-center">
              By posting a flyer, you agree to our<br/><a href="about.html" class="text-blue-500 hover:underline">Site Terms & Privacy Policies</a>
            </small>
            <a href="about.html" class="inline-flex gap-2 items-center justify-center border align-middle select-none font-sans font-medium text-center text-sm py-2 px-4 shadow-sm bg-stone-200 hover:bg-stone-100 relative border-stone-200 text-stone-700 rounded-lg">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

