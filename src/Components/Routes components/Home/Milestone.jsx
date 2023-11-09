const Milestone = () => {
  return (
    <div className="bg-gradient-to-r from-[#38A745] to-[#4CCE5B] mt-6">
      <div className="lg:w-[1400px] mx-auto grid grid-cols-2 lg:py-24 py-12 gap-12 lg:grid-cols-4">
        <div className="flex flex-col justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
          >
            <path
              d="M43.4623 37.8489C43.4623 37.4527 43.6745 37.2546 44.0991 37.2546C44.5236 37.2546 44.7359 37.4527 44.7359 37.8489V42.1791C44.7359 42.5187 44.5943 42.8301 44.3113 43.1131C44.0283 43.3961 43.717 43.5376 43.3774 43.5376H23.7642C23.4811 43.5376 23.2264 43.4527 23 43.2829C22.7736 43.4527 22.5189 43.5376 22.2359 43.5376H2.62265C2.28303 43.5376 1.97171 43.3961 1.68869 43.1131C1.40567 42.8301 1.26416 42.5187 1.26416 42.1791V32.1602C1.26416 31.5942 1.34907 31.0706 1.51888 30.5895C1.68869 30.1084 1.8868 29.7263 2.11322 29.4433C2.33963 29.1602 2.6085 28.9055 2.91982 28.6791C3.23114 28.4527 3.44341 28.3112 3.55661 28.2546C3.66982 28.198 3.78303 28.1414 3.89624 28.0848L9.50001 25.8772V24.8584C8.53774 24.0659 7.94341 23.0753 7.71699 21.8867C7.37737 21.83 7.0519 21.7027 6.74058 21.5046C6.42925 21.3065 6.18869 21.0376 6.01888 20.698C5.84907 20.3584 5.76416 20.0187 5.76416 19.6791C5.76416 19.1697 5.93397 18.7168 6.27359 18.3206V16.5376C6.27359 15.1791 6.69812 13.9621 7.54718 12.8867C8.33963 11.8112 9.3585 11.1036 10.6038 10.764C11.0566 10.6508 11.3396 10.7923 11.4528 11.1885C11.566 11.5848 11.4245 11.8395 11.0283 11.9527C10.0094 12.2357 9.17454 12.8159 8.52359 13.6933C7.87265 14.5706 7.54718 15.5187 7.54718 16.5376V17.5565C7.60378 17.5565 7.66039 17.5565 7.71699 17.5565C7.94341 17.047 8.33963 16.8206 8.90567 16.8772C10.7736 16.9904 12.5566 16.481 14.2547 15.3489C14.7076 15.0659 15.1321 15.1225 15.5283 15.5187C16.434 16.481 16.9151 16.9904 16.9717 17.047C17.0283 17.2168 17.0849 17.3584 17.1415 17.4716C17.1415 17.5282 17.1698 17.5565 17.2264 17.5565V16.5376C17.2264 15.4621 16.8868 14.4857 16.2076 13.6084C15.5283 12.731 14.6793 12.1791 13.6604 11.9527C13.2076 11.8395 13.0377 11.5706 13.151 11.1461C13.2642 10.7216 13.5189 10.5659 13.9151 10.6791C14.8208 10.9055 15.6415 11.3301 16.3774 11.9527C16.3774 11.4433 16.5472 11.0187 16.8868 10.6791V8.89609C16.8868 7.82062 17.1557 6.80175 17.6934 5.83949C18.2311 4.87722 18.967 4.12722 19.901 3.58949C20.8349 3.05175 21.8396 2.78288 22.9151 2.78288C24.6132 2.78288 26.0566 3.37722 27.2453 4.5659C28.434 5.75458 29.0283 7.19798 29.0283 8.89609V10.5942C29.3679 10.9904 29.5377 11.4433 29.5377 11.9527C30.6698 10.9904 32 10.5093 33.5283 10.5093C35.1698 10.5093 36.5849 11.1036 37.7736 12.2923C38.9623 13.481 39.5566 14.8961 39.5566 16.5376V18.3206C39.8962 18.7168 40.066 19.1697 40.066 19.6791C40.066 20.3584 39.8113 20.9244 39.3019 21.3772C38.9623 21.6602 38.566 21.83 38.1132 21.8867C37.9434 23.0187 37.4057 23.981 36.5 24.7734V25.8772L42.1038 28.0848C42.3302 28.198 42.5849 28.3395 42.8679 28.5093C43.151 28.6791 43.533 29.1036 44.0142 29.7829C44.4953 30.4621 44.7359 31.2546 44.7359 32.1602V34.8772C44.7359 35.3301 44.5236 35.5565 44.0991 35.5565C43.6745 35.5565 43.4623 35.3301 43.4623 34.8772V32.1602C43.4623 30.7451 42.8396 29.7829 41.5943 29.2734L38.283 27.9999L36.8396 30.8867C36.7264 31.1697 36.5142 31.3536 36.2028 31.4385C35.8915 31.5234 35.6227 31.4527 35.3962 31.2263H35.3113L35.0566 31.6508L36.5 40.0565C36.5566 40.3395 36.4717 40.5942 36.2453 40.8206L34.9717 42.264H39.6415V32.9244C39.6415 32.5282 39.8538 32.3301 40.2783 32.3301C40.7028 32.3301 40.9151 32.5282 40.9151 32.9244V42.264H43.3774C43.434 42.264 43.4623 42.2357 43.4623 42.1791V37.8489ZM7.71699 20.5282V18.83C7.26416 18.9999 7.03774 19.2829 7.03774 19.6791C7.03774 20.1319 7.26416 20.415 7.71699 20.5282ZM37.0943 27.5753L35.9906 27.1508C35.7642 27.4338 35.5519 27.6885 35.3538 27.915C35.1557 28.1414 35.0283 28.297 34.9717 28.3819C34.9151 28.4668 34.8585 28.5517 34.8019 28.6367C34.7453 28.7216 34.6321 28.8489 34.4623 29.0187C35.4245 29.698 35.9057 30.0376 35.9057 30.0376L37.0943 27.5753ZM33.5283 28.1697L35.2264 26.1319V25.4527C34.6604 25.6791 34.0943 25.7923 33.5283 25.7923C32.9623 25.7923 32.4245 25.7074 31.9151 25.5376V26.1319L33.5283 28.1697ZM34.2925 30.4621L33.5283 29.9527L32.7642 30.4621L33.0189 30.8017H34.0377L34.2925 30.4621ZM23 20.4433L24.6132 18.4055V17.8112C24.1038 17.981 23.566 18.0659 23 18.0659C22.434 18.0659 21.8962 17.981 21.3868 17.8112V18.4055L23 20.4433ZM23.7642 22.8206L23 22.3112L22.2359 22.8206L22.4906 23.1602H23.5094L23.7642 22.8206ZM17.9906 14.1602C18.3302 14.8961 18.5 15.6885 18.5 16.5376V18.3206C18.6132 18.4338 18.6981 18.5753 18.7547 18.7451L20.1132 18.2357V17.1319C19.0943 16.3961 18.5 15.4055 18.3302 14.1602C18.217 14.1602 18.1038 14.1602 17.9906 14.1602ZM26.3962 13.481C26.3962 12.2357 26.3962 11.0753 26.3962 9.99986C26.3396 9.99986 25.9717 9.63194 25.2925 8.89609C23.4811 10.0282 21.5566 10.5659 19.5189 10.5093V13.481C19.5189 14.3867 19.8443 15.165 20.4953 15.8159C21.1462 16.4668 21.9811 16.7923 23 16.7923C23.9057 16.7923 24.6981 16.4668 25.3774 15.8159C26.0566 15.165 26.3962 14.3867 26.3962 13.481ZM27.5849 14.1602C27.4151 15.3489 26.8491 16.3112 25.8868 17.047V18.2357L27.1604 18.7451C27.217 18.5753 27.3019 18.4338 27.4151 18.3206V16.5376C27.4151 15.6885 27.5849 14.8961 27.9245 14.1602C27.8113 14.1602 27.6981 14.1602 27.5849 14.1602ZM20.5377 19.4244L19.434 19.8489L20.7076 22.3961L21.0472 22.1414L22.066 21.3772L20.5377 19.4244ZM24.4434 20.698L23.934 21.3772L24.9528 22.1414L25.2925 22.3961L26.566 19.8489L25.4623 19.4244L24.4434 20.698ZM24.783 23.4999L24.5283 23.9244L25.2076 27.9999L30.6415 25.8772V24.8584C29.6227 24.0659 29.0283 23.0753 28.8585 21.8867C28.2359 21.7734 27.7547 21.4904 27.4151 21.0376L26.3113 23.2451C26.1981 23.5282 25.9859 23.698 25.6745 23.7546C25.3632 23.8112 25.0943 23.7546 24.8679 23.5848L24.783 23.4999ZM31.066 27.1508L29.9623 27.5753L31.2359 30.0376C31.2925 30.0376 31.7453 29.698 32.5943 29.0187L31.066 27.1508ZM36.9245 21.1225C36.9245 19.8772 36.9245 18.7451 36.9245 17.7263C36.9245 17.6697 36.5849 17.2734 35.9057 16.5376C34.0377 17.6697 32.0849 18.2074 30.0472 18.1508V21.1225C30.0472 22.0282 30.3727 22.8206 31.0236 23.4999C31.6745 24.1791 32.5094 24.5187 33.5283 24.5187C34.4906 24.5187 35.2972 24.1791 35.9481 23.4999C36.5991 22.8206 36.9245 22.0282 36.9245 21.1225ZM38.1981 20.5282C38.5943 20.415 38.7925 20.1319 38.7925 19.6791C38.7925 19.2263 38.5943 18.9433 38.1981 18.83V20.5282ZM28.6887 16.5376V17.5565C28.7453 17.5565 28.8019 17.5565 28.8585 17.5565C29.0283 17.047 29.3962 16.8206 29.9623 16.8772C31.8868 16.9904 33.6981 16.481 35.3962 15.3489C35.8491 15.0659 36.2736 15.1225 36.6698 15.5187C37.5189 16.481 37.9717 16.9904 38.0283 17.047C38.1415 17.2168 38.1981 17.3584 38.1981 17.4716C38.2547 17.5282 38.283 17.5565 38.283 17.5565V16.5376C38.283 15.2357 37.816 14.1178 36.8821 13.1838C35.9481 12.2499 34.8302 11.7829 33.5283 11.7829C32.6227 11.7829 31.8019 11.9951 31.066 12.4197C30.3302 12.8442 29.75 13.4244 29.3255 14.1602C28.901 14.8961 28.6887 15.6885 28.6887 16.5376ZM28.7736 18.83C28.3774 18.9999 28.1793 19.2829 28.1793 19.6791C28.1793 20.1319 28.3774 20.415 28.7736 20.5282V18.83ZM28.2642 12.0376C28.2642 11.5848 28.066 11.2734 27.6698 11.1036V12.8867C27.783 12.83 27.8679 12.7734 27.9245 12.7168C28.151 12.547 28.2642 12.3206 28.2642 12.0376ZM26.3538 5.49986C26.3538 5.49986 26.1203 5.2593 25.6533 4.77816C25.1863 4.29703 24.2877 4.05647 22.9576 4.05647C21.6274 4.05647 20.4953 4.5376 19.5613 5.49986C18.6274 6.46212 18.1604 7.5942 18.1604 8.89609V9.91496C18.217 9.85835 18.2736 9.83005 18.3302 9.83005C18.5 9.37722 18.8396 9.15081 19.3491 9.15081C21.2736 9.32062 23.0849 8.83949 24.783 7.70741C25.2925 7.42439 25.7453 7.481 26.1415 7.87722C26.9906 8.78288 27.4434 9.26401 27.5 9.32062C27.6132 9.49043 27.6698 9.66024 27.6698 9.83005C27.7264 9.83005 27.7547 9.83005 27.7547 9.83005V8.89609C27.7547 7.5942 27.2877 6.46212 26.3538 5.49986ZM18.2453 11.1885C17.8491 11.3584 17.651 11.6414 17.651 12.0376C17.651 12.4338 17.8491 12.7168 18.2453 12.8867V11.1885ZM17.1415 18.83V20.5282C17.5377 20.3584 17.7359 20.047 17.7359 19.5942C17.6793 19.198 17.4811 18.9433 17.1415 18.83ZM17.0566 21.8867C16.8868 23.0187 16.3208 23.981 15.3585 24.7734V25.8772L20.7925 27.9999L21.4717 23.9244L21.217 23.4999L21.1321 23.5848C20.9057 23.7546 20.6368 23.8112 20.3255 23.7546C20.0142 23.698 19.8019 23.5282 19.6887 23.2451L18.5849 20.9527C18.1887 21.4621 17.6793 21.7734 17.0566 21.8867ZM12.4717 28.1697L14.0849 26.1319V25.4527C13.5755 25.6791 13.0377 25.7923 12.4717 25.7923C11.9057 25.7923 11.3396 25.7074 10.7736 25.5376V26.1319L12.4717 28.1697ZM13.2359 30.4621L12.4717 29.9527L11.7076 30.4621L11.9623 30.8017H12.9811L13.2359 30.4621ZM14.934 27.1508L13.4057 29.0187L14.4245 29.7829L14.7642 30.0376L16.0377 27.5753L14.934 27.1508ZM8.99058 21.1225C8.99058 22.0282 9.31605 22.8206 9.96699 23.4999C10.6179 24.1791 11.4528 24.5187 12.4717 24.5187C13.3774 24.5187 14.1698 24.1791 14.8491 23.4999C15.5283 22.8206 15.8679 22.0282 15.8679 21.1225V17.7263C15.8113 17.6697 15.4434 17.2734 14.7642 16.5376C12.9528 17.6697 11.0283 18.2074 8.99058 18.1508V21.1225ZM9.92454 27.1508L8.90567 27.5753L10.0943 30.0376L10.434 29.7829L11.5377 29.0187L9.92454 27.1508ZM6.3585 42.264H11.0283L9.75473 40.8206C9.52831 40.5942 9.44341 40.3395 9.50001 40.0565L10.9434 31.6508L10.6887 31.2263H10.6038C10.3208 31.4527 10.0377 31.5234 9.75473 31.4385C9.47171 31.3536 9.27359 31.1697 9.16039 30.8867L7.71699 27.9999L4.40567 29.2734C3.16039 29.7829 2.53775 30.7451 2.53775 32.1602V42.1791C2.53775 42.2357 2.56605 42.264 2.62265 42.264H5.08491V32.9244C5.08491 32.5282 5.29718 32.3301 5.72171 32.3301C6.14624 32.3301 6.3585 32.5282 6.3585 32.9244V42.264ZM10.7736 40.0565L12.4717 41.9244L14.0849 40.0565L12.7264 32.0753H12.1321L10.7736 40.0565ZM22.3208 42.1791V32.1602C22.3208 30.7451 21.7264 29.7829 20.5377 29.2734L17.2264 27.9999L15.783 30.8867C15.6132 31.2829 15.3019 31.481 14.8491 31.481C14.6793 31.481 14.5094 31.3961 14.3396 31.2263H14.2547L14 31.6508L15.3585 40.0565C15.4151 40.3395 15.3585 40.5942 15.1887 40.8206L13.9151 42.264H18.5849V32.9244C18.5849 32.5282 18.7972 32.3301 19.2217 32.3301C19.6462 32.3301 19.8585 32.5282 19.8585 32.9244V42.264H22.2359C22.2925 42.264 22.3208 42.2357 22.3208 42.1791ZM23 29.8678C23.283 29.415 23.6227 29.0187 24.0189 28.6791L23.3396 24.4338H22.6604L21.9811 28.6791C22.3774 29.0187 22.717 29.415 23 29.8678ZM27.4151 42.264H32.0849L30.8113 40.8206C30.6415 40.5942 30.5566 40.3395 30.5566 40.0565H30.6415L32 31.6508L31.7453 31.2263H31.6604C31.434 31.4527 31.1651 31.5234 30.8538 31.4385C30.5425 31.3536 30.3302 31.1697 30.217 30.8867L28.7736 27.9999L25.4623 29.2734C25.066 29.4433 24.6981 29.7263 24.3585 30.1225C23.9057 30.6885 23.6793 31.3678 23.6793 32.1602V42.1791C23.6793 42.2357 23.7076 42.264 23.7642 42.264H26.1415V32.9244C26.1415 32.5282 26.3538 32.3301 26.7783 32.3301C27.2028 32.3301 27.4151 32.5282 27.4151 32.9244V42.264ZM31.9151 40.0565L33.5283 41.9244L35.2264 40.0565L33.8679 32.0753H33.2736L31.9151 40.0565Z"
              fill="white"
            />
          </svg>
          <h1 className="text-5xl mt-5 font-bold text-white">14 K+</h1>
          <span className="text-lg font-normal text-white">Job Available</span>
        </div>

        <div className="flex flex-col justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
          >
            <path
              d="M42.6981 44.2168H1.94341C1.49058 44.2168 1.26416 43.9904 1.26416 43.5376V2.78283C1.26416 2.33001 1.49058 2.10359 1.94341 2.10359H26.3962C26.566 2.10359 26.7359 2.16019 26.9057 2.2734L32.3396 7.70736C32.4528 7.87717 32.5094 8.04699 32.5094 8.2168V14.33C34.5472 14.33 36.3019 15.0659 37.7736 16.5376C39.2453 18.0092 39.9811 19.764 39.9811 21.8017V23.1602C40.5472 23.2734 41.0283 23.5564 41.4245 24.0092C41.8208 24.4621 42.0189 24.9715 42.0189 25.5376C42.0189 26.2168 41.7925 26.7828 41.3396 27.2357C40.8868 27.6885 40.3208 27.9149 39.6415 27.9149H38.7076C38.2547 28.9904 37.5472 29.896 36.5849 30.6319V31.9904H37.9434C39.4151 31.9904 40.6887 32.5281 41.7642 33.6036C42.8396 34.6791 43.3774 35.9526 43.3774 37.4243V43.5376C43.3774 43.9904 43.151 44.2168 42.6981 44.2168ZM28.7736 33.3489H27.3302L28.8585 37.8489L31.4057 36.4904L28.7736 33.3489ZM32.2547 40.8206L31.4906 42.8583H33.5283L32.7642 40.8206H32.2547ZM32.7642 39.4621L33.5283 38.0187L32.5094 37.5092L31.4906 38.0187L32.2547 39.4621H32.7642ZM33.6132 36.4904L36.1604 37.8489L37.6887 33.3489H36.2453L33.6132 36.4904ZM35.2264 32.4149V31.396C34.3774 31.7923 33.4717 31.9904 32.5094 31.9904C31.5472 31.9904 30.6415 31.7923 29.7925 31.396V32.4149L32.5094 35.7262L35.2264 32.4149ZM37.9434 25.1979V24.4338C36.6415 24.264 35.5943 23.6696 34.8019 22.6508L34.5472 22.2262L34.2925 22.6508C33.3302 23.896 32.0566 24.5187 30.4717 24.5187H27.0755V25.1979C27.0755 26.6696 27.6132 27.9432 28.6887 29.0187C29.7642 30.0942 31.0377 30.6319 32.5094 30.6319C33.9811 30.6319 35.2547 30.0942 36.3302 29.0187C37.4057 27.9432 37.9434 26.6696 37.9434 25.1979ZM39.6415 26.5564C40.3208 26.5564 40.6604 26.2168 40.6604 25.5376C40.6604 24.8583 40.3208 24.5187 39.6415 24.5187H39.3019V25.1979C39.3019 25.6508 39.2453 26.1036 39.1321 26.5564H39.6415ZM38.6227 21.8017C38.6227 20.1036 38.0283 18.6602 36.8396 17.4715C35.651 16.2828 34.2076 15.6885 32.5094 15.6885C30.8113 15.6885 29.3679 16.2828 28.1793 17.4715C26.9906 18.6602 26.3962 20.1036 26.3962 21.8017V23.1602H30.4717C31.6038 23.1602 32.5094 22.7074 33.1887 21.8017L34.0377 20.6979C34.151 20.5281 34.3208 20.4432 34.5472 20.4432C34.7736 20.4432 34.9434 20.5281 35.0566 20.6979L35.9057 21.8017C36.5849 22.7074 37.4906 23.1602 38.6227 23.1602V21.8017ZM25.8868 26.5564C25.7736 26.1036 25.717 25.6508 25.717 25.1979V24.5187H25.3774C24.6981 24.5187 24.3585 24.8583 24.3585 25.5376C24.3585 26.2168 24.6981 26.5564 25.3774 26.5564H25.8868ZM27.0755 4.39604V7.53755H30.217L27.0755 4.39604ZM2.62265 3.46208V42.8583H21.6415V37.4243H13.4906V36.0659H21.8113C21.9245 35.5564 22.1227 35.1036 22.4057 34.7074H13.4906V33.3489H23.5094C24.5283 32.4432 25.717 31.9904 27.0755 31.9904H28.434V30.6319C27.4717 29.896 26.7642 28.9904 26.3113 27.9149H25.3774C24.3585 27.9149 23.651 27.4621 23.2547 26.5564H13.4906V25.1979H23C23.1132 24.6885 23.3538 24.2498 23.7217 23.8819C24.0896 23.514 24.5283 23.2734 25.0377 23.1602V21.8017C25.0377 19.9904 25.6179 18.3913 26.7783 17.0045C27.9387 15.6177 29.3962 14.7828 31.151 14.4998V8.89604H26.3962C25.9434 8.89604 25.717 8.66963 25.717 8.2168V3.46208H2.62265ZM23 37.4243V42.8583H30.0472L31.066 40.1413L30.3019 38.613L28.7736 39.3772C28.6604 39.4338 28.5472 39.4621 28.434 39.4621C28.3208 39.4621 28.2359 39.4338 28.1793 39.3772C28.0094 39.3206 27.8679 39.2074 27.7547 39.0376L25.9717 33.5187C25.1227 33.7451 24.4151 34.2262 23.8491 34.9621C23.283 35.6979 23 36.5187 23 37.4243ZM42.0189 42.8583V37.4243C42.0189 36.5187 41.7359 35.6979 41.1698 34.9621C40.6038 34.2262 39.8962 33.7451 39.0472 33.5187L37.2642 39.0376C37.151 39.2074 37.0094 39.3206 36.8396 39.3772C36.783 39.4338 36.6981 39.4621 36.5849 39.4621C36.4717 39.4621 36.3585 39.4338 36.2453 39.3772L34.717 38.613L33.9528 40.1413L34.9717 42.8583H42.0189ZM9.83963 7.53755L11.6227 5.66963L12.6415 6.6885L10.7736 8.47151V13.6508C10.7736 14.1036 10.5472 14.33 10.0943 14.33H4.66039C4.20756 14.33 3.98114 14.1036 3.98114 13.6508V8.2168C3.98114 7.76397 4.20756 7.53755 4.66039 7.53755H9.83963ZM9.4151 12.9715V9.83001L7.20756 12.1225L6.18869 11.1036L8.48114 8.89604H5.33963V12.9715H9.4151ZM9.83963 15.6885L11.6227 13.8206L12.6415 14.8394L10.7736 16.6225V21.8017C10.7736 22.2545 10.5472 22.4809 10.0943 22.4809H4.66039C4.20756 22.4809 3.98114 22.2545 3.98114 21.8017V16.3677C3.98114 15.9149 4.20756 15.6885 4.66039 15.6885H9.83963ZM9.4151 21.1225V17.9809L7.20756 20.2734L6.18869 19.2545L8.48114 17.047H5.33963V21.1225H9.4151ZM9.83963 23.8394L11.6227 21.9715L12.6415 22.9904L10.7736 24.7734V29.9526C10.7736 30.4055 10.5472 30.6319 10.0943 30.6319H4.66039C4.20756 30.6319 3.98114 30.4055 3.98114 29.9526V24.5187C3.98114 24.0659 4.20756 23.8394 4.66039 23.8394H9.83963ZM9.4151 29.2734V26.1319L7.20756 28.4243L6.18869 27.4055L8.48114 25.1979H5.33963V29.2734H9.4151ZM11.6227 30.1225L12.6415 31.1413L10.7736 32.9243V38.1036C10.7736 38.5564 10.5472 38.7828 10.0943 38.7828H4.66039C4.20756 38.7828 3.98114 38.5564 3.98114 38.1036V32.6696C3.98114 32.2168 4.20756 31.9904 4.66039 31.9904H9.83963L11.6227 30.1225ZM9.4151 37.4243V34.2828L7.20756 36.5753L6.18869 35.5564L8.48114 33.3489H5.33963V37.4243H9.4151ZM13.4906 8.89604H24.3585V10.2545H13.4906V8.89604ZM13.4906 11.613H24.3585V12.9715H13.4906V11.613ZM13.4906 17.047H24.3585V18.4055H13.4906V17.047ZM13.4906 19.764H24.3585V21.1225H13.4906V19.764ZM13.4906 27.9149H24.3585V29.2734H13.4906V27.9149Z"
              fill="white"
            />
          </svg>
          <h1 className="text-5xl mt-5 font-bold text-white">18 K+</h1>
          <span className="text-lg font-normal text-white">CV Submitted</span>
        </div>

        <div className="flex flex-col justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
          >
            <path
              d="M16.4623 17.3866V15.9432H17.9057V17.3866H16.4623ZM16.4623 20.2734V18.83H17.9057V20.2734H16.4623ZM16.4623 23.1601V21.7168H17.9057V23.1601H16.4623ZM16.4623 26.0469V24.6035H17.9057V26.0469H16.4623ZM19.3491 17.3866V15.9432H20.7925V17.3866H19.3491ZM19.3491 20.2734V18.83H20.7925V20.2734H19.3491ZM19.3491 23.1601V21.7168H20.7925V23.1601H19.3491ZM19.3491 26.0469V24.6035H20.7925V26.0469H19.3491ZM22.2359 17.3866V15.9432H23.7642V17.3866H22.2359ZM22.2359 20.2734V18.83H23.7642V20.2734H22.2359ZM22.2359 23.1601V21.7168H23.7642V23.1601H22.2359ZM22.2359 26.0469V24.6035H23.7642V26.0469H22.2359ZM25.2076 17.3866V15.9432H26.651V17.3866H25.2076ZM19.3491 14.4998V13.0564H20.7925V14.4998H19.3491ZM22.2359 14.4998V13.0564H23.7642V14.4998H22.2359ZM25.2076 14.4998V13.0564H26.651V14.4998H25.2076ZM25.2076 20.2734V18.83H26.651V20.2734H25.2076ZM25.2076 23.1601V21.7168H26.651V23.1601H25.2076ZM25.2076 26.0469V24.6035H26.651V26.0469H25.2076ZM28.0943 17.3866V15.9432H29.5377V17.3866H28.0943ZM28.0943 20.2734V18.83H29.5377V20.2734H28.0943ZM28.0943 23.1601V21.7168H29.5377V23.1601H28.0943ZM28.0943 26.0469V24.6035H29.5377V26.0469H28.0943ZM43.9717 12.2922C44.4811 12.2922 44.7359 12.5469 44.7359 13.0564V39.1224C44.7359 39.5752 44.4811 39.8017 43.9717 39.8017H42.5283C42.5283 40.0281 42.5283 40.2828 42.5283 40.5658V44.1318C42.5283 44.6413 42.3019 44.896 41.8491 44.896H4.15095C3.69812 44.896 3.47171 44.6413 3.47171 44.1318V40.5658C3.47171 40.2828 3.47171 40.0281 3.47171 39.8017H2.02831C1.51888 39.8017 1.26416 39.5752 1.26416 39.1224V13.0564C1.26416 12.5469 1.51888 12.2922 2.02831 12.2922H12.8962V2.18845C12.8962 1.67902 13.1227 1.4243 13.5755 1.4243H32.4245C32.8774 1.4243 33.1038 1.67902 33.1038 2.18845V12.2922H43.9717ZM32.4245 32.5847C32.4245 32.3017 32.3538 32.0469 32.2123 31.8205C32.0708 31.5941 31.901 31.4243 31.7028 31.3111C31.5047 31.1979 31.2642 31.1413 30.9811 31.1413C30.5849 31.1413 30.2453 31.2828 29.9623 31.5658C29.6793 31.8488 29.5377 32.1884 29.5377 32.5847C29.5377 32.9809 29.6793 33.3205 29.9623 33.6035C30.2453 33.8866 30.5849 34.0281 30.9811 34.0281C31.3774 34.0281 31.717 33.8866 32 33.6035C32.283 33.3205 32.4245 32.9809 32.4245 32.5847ZM16.0377 31.5658C16.0377 31.5658 15.967 31.4951 15.8255 31.3535C15.684 31.212 15.4151 31.1413 15.0189 31.1413C14.6227 31.1413 14.283 31.2828 14 31.5658C13.717 31.8488 13.5755 32.1884 13.5755 32.5847C13.5755 32.9809 13.717 33.3205 14 33.6035C14.283 33.8866 14.6227 34.0281 15.0189 34.0281C15.4151 34.0281 15.7547 33.8866 16.0377 33.6035C16.3208 33.3205 16.4623 32.9809 16.4623 32.5847C16.4623 32.1884 16.3208 31.8488 16.0377 31.5658ZM10.6887 43.4526V40.5658C10.6887 39.7734 10.4057 39.0941 9.83963 38.5281C9.27359 37.962 8.59435 37.679 7.8019 37.679C7.00944 37.679 6.3302 37.962 5.76416 38.5281C5.19812 39.0941 4.9151 39.7734 4.9151 40.5658V43.4526H10.6887ZM6.78303 33.6884C6.78303 33.6884 6.71227 33.7592 6.57076 33.9007C6.42925 34.0422 6.3585 34.3252 6.3585 34.7498C6.3585 35.1743 6.50001 35.5281 6.78303 35.8111C7.06605 36.0941 7.40567 36.2356 7.8019 36.2356C8.19812 36.2356 8.53774 36.0941 8.82076 35.8111C9.10378 35.5281 9.24529 35.1884 9.24529 34.7922C9.24529 34.5092 9.17454 34.2545 9.03303 34.0281C8.89152 33.8017 8.70756 33.6177 8.48114 33.4762C8.25473 33.3347 8.02831 33.2639 7.8019 33.2639C7.40567 33.2639 7.06605 33.4054 6.78303 33.6884ZM10.7736 37.4243C11.0566 36.179 11.7642 35.2168 12.8962 34.5375C12.3868 34.0281 12.1321 33.3913 12.1321 32.6271C12.1321 31.863 12.3868 31.2262 12.8962 30.7168V13.7356H2.70756V38.3583H4.06605C4.46227 37.679 5.00001 37.1413 5.67925 36.7451C5.16982 36.179 4.9151 35.5139 4.9151 34.7498C4.9151 33.9856 5.16982 33.3205 5.67925 32.7545C6.24529 32.1884 6.92454 31.8913 7.71699 31.863C8.50944 31.8347 9.20284 32.0894 9.79718 32.6271C10.3915 33.1649 10.6887 33.8441 10.6887 34.6649C10.6887 35.4856 10.4057 36.179 9.83963 36.7451C10.1793 36.9149 10.4906 37.1413 10.7736 37.4243ZM17.9057 43.4526V38.3583C17.9057 37.962 17.8349 37.5941 17.6934 37.2545C17.5519 36.9149 17.3538 36.6035 17.0991 36.3205C16.8443 36.0375 16.533 35.8252 16.1651 35.6837C15.7972 35.5422 15.4151 35.4715 15.0189 35.4715C14.2264 35.4715 13.5472 35.7545 12.9811 36.3205C12.4151 36.8866 12.1321 37.5658 12.1321 38.3583V43.4526H17.9057ZM26.651 43.4526V38.3583C26.651 37.396 26.2972 36.5611 25.5896 35.8535C24.8821 35.146 24.0189 34.7922 23 34.7922C21.9811 34.7922 21.1179 35.146 20.4104 35.8535C19.7028 36.5611 19.3491 37.396 19.3491 38.3583V43.4526H26.651ZM21.4293 29.5705C21.4293 29.5705 21.3231 29.6767 21.1109 29.8889C20.8986 30.1012 20.7925 30.5045 20.7925 31.0988C20.7925 31.6932 21.0047 32.2026 21.4293 32.6271C21.8538 33.0517 22.3774 33.2639 23 33.2639C23.6227 33.2639 24.1462 33.0517 24.5708 32.6271C24.9953 32.2026 25.2076 31.6932 25.2076 31.0988C25.2076 30.5045 24.9953 29.9951 24.5708 29.5705C24.1462 29.146 23.6227 28.9337 23 28.9337C22.3774 28.9337 21.8538 29.146 21.4293 29.5705ZM27.4151 35.896C27.8113 35.33 28.2925 34.8771 28.8585 34.5375C28.3491 33.9715 28.0943 33.3205 28.0943 32.5847C28.0943 31.7922 28.3774 31.113 28.9434 30.5469C29.5094 29.9809 30.1887 29.6979 30.9811 29.6979C31.2076 29.6979 31.434 29.7262 31.6604 29.7828V2.86769H14.3396V29.7828C15.3585 29.4998 16.2642 29.7262 17.0566 30.462C17.6227 31.0281 17.9198 31.7073 17.9481 32.4998C17.9764 33.2922 17.7076 33.9715 17.1415 34.5375C17.7076 34.8771 18.1887 35.33 18.5849 35.896C19.0943 34.9903 19.8019 34.3111 20.7076 33.8583C20.5377 33.7451 20.3679 33.6035 20.1981 33.4337C19.5755 32.6979 19.3066 31.8205 19.3915 30.8017C19.4764 29.7828 19.901 28.962 20.6651 28.3394C21.4293 27.7168 22.3066 27.4479 23.2972 27.5328C24.2877 27.6177 25.1085 28.0422 25.7594 28.8064C26.4104 29.5705 26.6934 30.4479 26.6085 31.4384C26.5236 32.429 26.0849 33.2356 25.2925 33.8583C26.1981 34.3111 26.9057 34.9903 27.4151 35.896ZM33.8679 40.5658V38.3583C33.8679 37.5658 33.5849 36.8866 33.0189 36.3205C32.4528 35.7545 31.7736 35.4715 30.9811 35.4715C30.1887 35.4715 29.5094 35.7545 28.9434 36.3205C28.3774 36.8866 28.0943 37.5658 28.0943 38.3583V43.4526H33.8679V40.5658ZM41.0849 43.4526V40.5658C41.0849 39.7734 40.8019 39.0941 40.2359 38.5281C39.6698 37.962 38.9906 37.679 38.1981 37.679C37.4057 37.679 36.7264 37.962 36.1604 38.5281C35.5943 39.0941 35.3113 39.7734 35.3113 40.5658V43.4526H41.0849ZM37.1793 33.6884C37.1793 33.6884 37.1085 33.7592 36.967 33.9007C36.8255 34.0422 36.7547 34.3252 36.7547 34.7498C36.7547 35.1743 36.8962 35.5281 37.1793 35.8111C37.4623 36.0941 37.8019 36.2356 38.1981 36.2356C38.5943 36.2356 38.934 36.0941 39.217 35.8111C39.5 35.5281 39.6415 35.1743 39.6415 34.7498C39.6415 34.3252 39.5 33.9715 39.217 33.6884C38.934 33.4054 38.5943 33.2639 38.1981 33.2639C37.8019 33.2639 37.4623 33.4054 37.1793 33.6884ZM43.2925 38.3583V13.7356H33.1038V30.7168C33.6132 31.2262 33.8679 31.863 33.8679 32.6271C33.8679 33.3913 33.6132 34.0281 33.1038 34.5375C34.2359 35.2168 34.9434 36.179 35.2264 37.4243C35.5094 37.1413 35.8208 36.9149 36.1604 36.7451C35.5943 36.179 35.3113 35.5139 35.3113 34.7498C35.3113 33.9856 35.5943 33.3205 36.1604 32.7545C36.6698 32.1884 37.3349 31.8913 38.1557 31.863C38.9764 31.8347 39.6698 32.0894 40.2359 32.6271C40.8019 33.1649 41.0991 33.8441 41.1274 34.6649C41.1557 35.4856 40.8868 36.179 40.3208 36.7451C41 37.1413 41.5377 37.679 41.934 38.3583H43.2925ZM35.3113 29.6979V18.0658H36.7547V29.6979H35.3113ZM39.6415 29.6979V18.0658H41.0849V29.6979H39.6415ZM4.9151 29.6979V18.0658H6.3585V29.6979H4.9151ZM9.24529 29.6979V18.0658H10.6887V29.6979H9.24529ZM27.3302 4.31109C27.8396 4.31109 28.0943 4.56581 28.0943 5.07524V10.8488C28.0943 11.3017 27.8396 11.5281 27.3302 11.5281H18.6698C18.1604 11.5281 17.9057 11.3017 17.9057 10.8488V5.07524C17.9057 4.56581 18.1604 4.31109 18.6698 4.31109H27.3302ZM26.651 10.0847V5.75449H19.3491V10.0847H26.651Z"
              fill="white"
            />
          </svg>
          <h1 className="text-5xl mt-5 font-bold text-white">9 K+</h1>
          <span className="text-lg font-normal text-white">Companies</span>
        </div>

        <div className="flex flex-col justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
          >
            <path
              d="M22.2359 40.0564C21.7264 40.0564 21.4717 39.7875 21.4717 39.2498C21.4717 38.7121 21.7264 38.4432 22.2359 38.4432H24.9528C26.1415 39.2356 27.4434 39.7734 28.8585 40.0564C28.7453 40.0564 28.6887 40.0564 28.6887 40.0564H22.2359ZM19.5189 32.9243C18.9528 32.9243 18.6698 32.6554 18.6698 32.1177C18.6698 31.58 18.9528 31.3111 19.5189 31.3111H20.6227C20.6793 31.8205 20.7925 32.3583 20.9623 32.9243H19.5189ZM13.6604 12.7168C12.5283 11.9809 11.9623 10.9621 11.9623 9.66016C11.9623 8.81111 12.2594 8.08941 12.8538 7.49507C13.4481 6.90073 14.1557 6.60356 14.9764 6.60356C15.7972 6.60356 16.5047 6.90073 17.0991 7.49507C17.6934 8.08941 17.9906 8.81111 17.9906 9.66016C17.9906 10.9621 17.4245 11.9809 16.2925 12.7168C17.4245 13.0564 18.3868 13.6366 19.1793 14.4573C19.9717 15.2781 20.3679 16.0847 20.3679 16.8771C20.3679 17.4432 19.4623 17.8394 17.651 18.0658C15.8396 18.2922 14.0425 18.2922 12.2594 18.0658C10.4764 17.8394 9.58492 17.4432 9.58492 16.8771C9.58492 16.3677 9.75473 15.83 10.0943 15.2639C10.434 14.6979 10.9151 14.1885 11.5377 13.7356C12.1604 13.2828 12.8679 12.9432 13.6604 12.7168ZM13.4906 16.7073L14.934 18.2356L16.4623 16.7073L15.1887 13.6507L15.6981 13.0564C15.4717 13.1696 15.2311 13.2262 14.9764 13.2262C14.7217 13.2262 14.4811 13.1696 14.2547 13.0564L14.6793 13.6507H14.7642L13.4906 16.7073ZM33.4434 43.1979L34.3774 44.7262C34.0377 44.7828 33.6981 44.8111 33.3585 44.8111H5.59435C4.40567 44.8111 3.3868 44.3866 2.53775 43.5375C1.68869 42.6885 1.26416 41.6696 1.26416 40.4809V5.75451C1.26416 4.56582 1.68869 3.54696 2.53775 2.6979C3.3868 1.84884 4.40567 1.42432 5.59435 1.42432H33.3585C34.151 1.42432 34.8868 1.62243 35.566 2.01865C36.2453 2.41488 36.783 2.93847 37.1793 3.58941C37.5755 4.24035 37.7736 4.96205 37.7736 5.75451V22.9904C37.2642 22.5375 36.6698 22.0847 35.9906 21.6319V5.75451C35.9906 5.01865 35.7359 4.39601 35.2264 3.88658C34.717 3.37714 34.0943 3.12243 33.3585 3.12243H5.59435C4.9151 3.12243 4.32076 3.37714 3.81133 3.88658C3.3019 4.39601 3.04718 5.01865 3.04718 5.75451V40.4809C3.04718 41.2168 3.3019 41.8394 3.81133 42.3488C4.32076 42.8583 4.9151 43.113 5.59435 43.113H33.3585C33.3585 43.113 33.3868 43.113 33.4434 43.113V43.1979ZM10.3491 29.2734C9.83963 29.2734 9.58492 29.0045 9.58492 28.4668C9.58492 27.929 9.83963 27.6602 10.3491 27.6602H20.8774C20.7076 28.1696 20.5943 28.7073 20.5377 29.2734H10.3491ZM10.3491 21.9715C9.83963 21.9715 9.58492 21.7026 9.58492 21.1649C9.58492 20.6271 9.83963 20.3583 10.3491 20.3583H28.0943C27.1887 20.6413 26.3396 20.9809 25.5472 21.3771C25.2642 21.547 24.9811 21.7451 24.6981 21.9715H10.3491ZM10.3491 25.6224C9.83963 25.6224 9.58492 25.3536 9.58492 24.8158C9.58492 24.2781 9.83963 24.0092 10.3491 24.0092H22.5755C22.2359 24.5187 21.9245 25.0564 21.6415 25.6224H10.3491ZM32.6793 22.3536C32.6793 22.3536 33.217 22.5021 34.2925 22.7993C35.3679 23.0965 36.4717 24.2073 37.6038 26.1319C38.7359 28.0564 39.0047 30.0941 38.4104 32.2451C37.816 34.396 36.5566 36.0234 34.6321 37.1271C32.7076 38.2309 30.6698 38.4998 28.5189 37.9338C26.3679 37.3677 24.7406 36.1224 23.6368 34.1979C22.533 32.2734 22.2642 30.2356 22.8302 28.0847C23.3962 25.9338 24.6415 24.2922 26.566 23.1602C28.4906 22.0281 30.5283 21.7592 32.6793 22.3536ZM37.1368 31.9054C37.1368 31.9054 37.2571 31.4526 37.4977 30.547C37.7382 29.6413 37.3915 28.3819 36.4576 26.7687C35.5236 25.1554 34.151 24.1083 32.3396 23.6271C30.5283 23.146 28.8302 23.3724 27.2453 24.3064C25.6604 25.2404 24.6274 26.613 24.1462 28.4243C23.6651 30.2356 23.8774 31.9338 24.783 33.5187C25.6887 35.1036 27.0472 36.1366 28.8585 36.6177C30.6698 37.0988 32.3821 36.8866 33.9953 35.9809C35.6085 35.0753 36.6557 33.7168 37.1368 31.9054ZM36.6698 36.6602L39.3019 41.2451L35.9057 43.2828L33.1887 38.613L36.6698 36.6602ZM39.7264 41.9243C40.0094 42.3771 40.0802 42.8724 39.9387 43.4102C39.7972 43.9479 39.4859 44.3583 39.0047 44.6413C38.5236 44.9243 38.0142 44.9951 37.4764 44.8536C36.9387 44.7121 36.5283 44.3866 36.2453 43.8771L39.7264 41.9243Z"
              fill="white"
            />
          </svg>
          <h1 className="text-5xl mt-5 font-bold text-white">35 K+</h1>
          <span className="text-lg font-normal text-white">Appointed to Job</span>
        </div>
      </div>
    </div>
  );
};

export default Milestone;
