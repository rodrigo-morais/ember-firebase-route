import Ember from 'ember';

function spentValue(args) {
    var spent = args.length > 0 ? args[0] : { value: 0 },
        text = args.length > 1 ? args[1] : '',
        rtrn = 'value: ' + spent.get('value');
  return text === '' ? rtrn : rtrn + ' - ' + text;
}

export default Ember.HTMLBars.makeBoundHelper(spentValue);
