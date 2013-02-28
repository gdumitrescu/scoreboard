# More info at 
# https://github.com/guard/guard#readme
# https://github.com/guard/guard/wiki/Guardfile-examples

# Launch Guard like this: [bundle exec] guard -g ui

group :ui do

#  guard :bundler, 
#    :hide_success => true do
#    watch('Gemfile')
#  end
  
  guard 'compass',
    :output => 'public/css',
    :workdir => 'source/sass',
    :configuration_file => 'config/compass.rb',
    :hide_success => true do
    watch('source/sass/(.*)\.sass')
  end

end
