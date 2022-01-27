const SelectSheetTemplateEl = document.createElement('select')
SelectSheetTemplateEl.classList.add('select-sheet-style')
SelectSheetTemplateEl.onchange = function () {
  // const selectedOption = this.options[this.selectedIndex].text
  // Templates[selectedOption]
}

const sheetOptions = ['a3Sheet', 'a4Sheet', 'usLegalSheet', 'usLetter', 'usTablois']
for (let i = 0; i < sheetOptions.length; i++) {
  const option = sheetOptions[i]
  const SheetTemplateOption = document.createElement('option')
  SheetTemplateOption.innerText = option
  SheetTemplateOption.selected = i === 0 ? true : false

  SelectSheetTemplateEl.appendChild(SheetTemplateOption)
}

export default SelectSheetTemplateEl
