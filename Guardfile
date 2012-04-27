# More info at 
# https://github.com/guard/guard#readme
# https://github.com/guard/guard/wiki/Guardfile-examples

# Launch Guard like this: [bundle exec] guard -g ui

group :ui do

  guard :bundler, 
    :hide_success => true do
    watch('Gemfile')
  end
  
  guard 'coffeescript', 
    :output => '/',
    #:bare => %w{ scoreboard.coffee }, 
    :hide_success => true do
    watch('source/coffee/(.*)\.coffee')
  end
  
  guard 'compass',
    :output => 'client/css',
    :workdir => 'source/sass',
    :configuration_file => 'config/compass.rb',
    :hide_success => true do
    watch('source/sass/(.*)\.sass')
  end
  
  # guard 'livereload', 
    # :apply_js_live => true, 
    # :apply_css_live => true,
    # :apply_htm_live => true do
    # watch('app/js/.+\.js$')
    # watch('app/css/.+\.css$')
    # watch('app/htm/.+\.htm$')
  # end

end
