export default (wrapper: Element): void => {
  const span = document.createElement('span');
  const elementBefore = wrapper.querySelector('div.region_details_donate');

  span.textContent = 'Стоимость: 122.67Т';
  span.setAttribute('style', 'display: block; width: 200px; font-family: "Impact"; font-size: 14px; margin: 14px 0 0 -30px; text-align: right; color: #FFFFFF;');
  elementBefore.after(span);
  span.nextElementSibling.remove();
};