# Exception Best Practices

## Exception Hierarchy

	BasicObject
	  Exception
	    NoMemoryError
	    ScriptError
	      LoadError
	      NotImplementedError
	      SyntaxError
	    SecurityError
	    SignalException
	      Interrupt
	    StandardError
	      ArgumentError
	      EncodingError
	        Encoding::CompatibilityError
	        Encoding::ConverterNotFoundError
	        Encoding::InvalidByteSequenceError
	        Encoding::UndefinedConversionError
	      FiberError
	      IOError
	        EOFError
	      IndexError
	        KeyError
	        StopIteration
	      LocalJumpError
	      Math::DomainError
	      NameError
	        NoMethodError
	      RangeError
	        FloatDomainError
	      RegexpError
	      RuntimeError
	      SystemCallError
	      ThreadError
	      TypeError
	      ZeroDivisionError
	    SystemExit
	    SystemStackError
	    fatal

## Rescue

The default behavior of rescue will catch any StandardError or any of it's subclasses. This does not include the many enviornmental exceptions. 

> *Error* should normally be reserved for describing application errors, while *exceptions* should be used to describe environmental exceptions. 

	begin
	  raise "FAIL!"
	rescue                # Rescues RuntimeError
	  # ...            
	end

	begin
	  raise StandardError
	rescue                # Rescues StandardError
	  # ...              
	end

	begin
	  raise SyntaxError   # SyntaxError is an enviornment exception
	rescue                # Default rescue only catches StandardError and subclasses
	  # ...               # So syntax error is not rescued
	end

Avoid rescuing the the `Exception` class because it will catch eviornmental exceptions including calls to `exit`, requiring you to `kill-9` the process. 

	begin
	  raise SystemExit
	rescue Exception
	  # Process will remain until killed
	end


## Custom Exceptions

When raising errors specific to your app, you should use your own custom error classes namespaced in a module. All of your custom errors should inherit from a root custom error.

> Avoid creating complex error hierarchies. Sometimes only one app specific error is necessary. 

     module MyApp
          class Error < StandardError; end 
          class ArgumentError < Error; end
          ...
     end

Custom errors should inherit from `StandardError` and not `Exception`. If you subclass `Exception` you risk catching environment exceptions.

	begin 
	  raise SyntaxError
	rescue MyApp::error 	# Inheriting from StandardError ensures that
	  # ...					# enviornmental exceptions pass through.
	end


> Name your custom exceptions with *Error* rather than *Exception*, because they should be subclasses of *StandardError* and not *Exception*.

Continuing with this example, you should raise `MyApp::ArgumentError` when the user provides bad arguments. This differentiates it from a standard `ArgumentError`. 

	begin
	  raise MyApp::ArgumentError
	rescue MyApp::ArgumentError 	# Custom error is rescued
	  # ... 
	end

	begin
	  raise ArgumentError
	rescue MyApp::ArgumentError 	# ArgumentError is not rescued
	  # ... 
	end

This also allows you to rescue any of your custom errors with `rescue MyApp::Error`, but still allow all standard exceptions to pass through your rescue block, making your code easier to debug. 

	begin
	  raise MyApp::Error
	rescue MyApp::ArgumentError # Custom error passes through first rescue
	  # ...
	rescue MyApp::Error         # But caught by root error
	  # ...
	end

	begin 
	  raise SyntaxError
	rescue MyApp::Error        # Allows syntax error to pass through
	  # ...
	end